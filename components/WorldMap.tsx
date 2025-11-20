import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import { CountryData, VisaType } from '../types';
import { GEO_URL } from '../constants';

// Mapping from ISO 3166-1 numeric code (from topojson) to our Data IDs
const NUMERIC_TO_ID: Record<string, string> = {
  "764": "THA", "702": "SGP", "458": "MYS", "398": "KAZ", "784": "ARE",
  "634": "QAT", "268": "GEO", "860": "UZB", "364": "IRN", "410": "KOR_JEJU",
  "360": "IDN", "418": "LAO", "116": "KHM", "524": "NPL", "144": "LKA",
  "462": "MDV", "048": "BHR", "400": "JOR", "704": "VNM", "504": "MAR",
  "788": "TUN", "480": "MUS", "690": "SYC", "818": "EGY", "834": "TZA",
  "404": "KEN", "450": "MDG", "024": "AGO", "508": "MOZ", "688": "SRB",
  "070": "BIH", "051": "ARM", "112": "BLR", "008": "ALB", "674": "SMR",
  "052": "BRB", "044": "BHS", "218": "ECU", "212": "DMA", "192": "CUB",
  "242": "FJI", "776": "TON", "882": "WSM", "296": "KIR", "580": "MNP"
};

interface WorldMapProps {
  countries: CountryData[];
  onCountrySelect: (country: CountryData) => void;
}

const WorldMap: React.FC<WorldMapProps> = ({ countries, onCountrySelect }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [geoData, setGeoData] = useState<any>(null);
  const [dimensions, setDimensions] = useState({ width: 1000, height: 800 });

  // Handle Resize for Full Screen
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fetch GeoJSON
  useEffect(() => {
    d3.json(GEO_URL).then((data: any) => {
      if (data) {
        setGeoData(topojson.feature(data, data.objects.countries));
      }
    }).catch(err => console.error("Map data load failed", err));
  }, []);

  // Helper to get color based on country data
  const getFillColor = (featureId: string) => {
    const myId = NUMERIC_TO_ID[featureId];
    if (!myId) return "rgba(255, 255, 255, 0.6)"; // Default for non-visa countries

    const country = countries.find(c => c.id === myId);
    if (!country) return "rgba(255, 255, 255, 0.6)";

    switch (country.type) {
      case VisaType.MUTUAL_FREE:
      case VisaType.VISA_FREE:
        return "rgba(74, 222, 128, 0.6)"; // Green-400, 0.6 opacity
      case VisaType.VOA:
        return "rgba(251, 146, 60, 0.6)"; // Orange-400, 0.6 opacity
      default:
        return "rgba(96, 165, 250, 0.6)"; // Blue-400, 0.6 opacity
    }
  };

  const getHoverColor = (featureId: string) => {
    const myId = NUMERIC_TO_ID[featureId];
    if (!myId) return "rgba(226, 232, 240, 0.8)"; // Slate-200 for default

    const country = countries.find(c => c.id === myId);
    if (!country) return "rgba(226, 232, 240, 0.8)";

    switch (country.type) {
      case VisaType.MUTUAL_FREE:
      case VisaType.VISA_FREE:
        return "rgba(34, 197, 94, 0.8)"; // Green-500 strong
      case VisaType.VOA:
        return "rgba(249, 115, 22, 0.8)"; // Orange-500 strong
      default:
        return "rgba(59, 130, 246, 0.8)"; // Blue-500 strong
    }
  };

  // Render Map
  useEffect(() => {
    if (!geoData || !svgRef.current) return;

    const { width, height } = dimensions;
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous render

    // Create Layers: Map Layer gets scaled, Marker Layer gets translated
    const mapLayer = svg.append("g").attr("class", "map-layer");
    const markerLayer = svg.append("g").attr("class", "marker-layer");

    // Adjusted projection: Centered on Nepal, Zoomed In
    const projection = d3.geoMercator()
      .center([84.1240, 28.3949]) // Center on Nepal
      .scale(width / 3.2) // Zoomed in (default roughly width/6 for full world)
      .translate([width / 2, height / 2]);

    const pathGenerator = d3.geoPath().projection(projection);

    // Draw Countries (Background)
    mapLayer.selectAll("path")
      .data(geoData.features)
      .enter()
      .append("path")
      .attr("d", pathGenerator as any)
      .attr("fill", (d: any) => getFillColor(d.id))
      .attr("stroke", "rgba(203, 213, 225, 0.6)")
      .attr("stroke-width", 0.5)
      .style("transition", "fill 0.2s ease")
      .on("mouseover", function(event, d: any) {
         d3.select(this).attr("fill", getHoverColor(d.id));
      })
      .on("mouseout", function(event, d: any) {
         d3.select(this).attr("fill", getFillColor(d.id));
      })
      .on("click", (event, d: any) => {
        const myId = NUMERIC_TO_ID[d.id];
        if (myId) {
          const country = countries.find(c => c.id === myId);
          if (country) onCountrySelect(country);
        }
      });

    // Create Markers (Using Data Binding)
    const markers = markerLayer.selectAll("g.marker")
      .data(countries)
      .enter()
      .append("g")
      .attr("class", "marker")
      .style("cursor", "pointer")
      .on("click", (event, d) => {
        event.stopPropagation();
        onCountrySelect(d);
      });

    // 1. Pulse Effect Circle
    markers.append("circle")
      .attr("r", 4)
      .attr("fill", d => getColorByType(d.type))
      .attr("fill-opacity", 0.3)
      .append("animate")
      .attr("attributeName", "r")
      .attr("from", 5)
      .attr("to", 18)
      .attr("dur", "2s")
      .attr("repeatCount", "indefinite");
    
    // 2. Main Dot
    markers.append("circle")
      .attr("r", 3)
      .attr("fill", d => getColorByType(d.type))
      .attr("stroke", "#fff")
      .attr("stroke-width", 1);

    // 3. Flag (Fixed Font Size)
    markers.append("text")
      .attr("text-anchor", "middle")
      .attr("y", -10)
      .attr("font-size", "14px")
      .text(d => d.flag);

    // 4. Country Name (Fixed Font Size)
    markers.append("text")
      .attr("text-anchor", "middle")
      .attr("y", 12)
      .attr("font-size", "10px")
      .attr("font-weight", "bold")
      .attr("fill", "#1e293b")
      .style("text-shadow", "0px 2px 4px rgba(255,255,255,1), 0px 0px 4px rgba(255,255,255,1)")
      .text(d => d.name);

    // Zoom Behavior
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.5, 8]) // Allow zooming out to 0.5x (approx full world) and in 8x
      .translateExtent([[-width * 1.5, -height * 1.5], [width * 2.5, height * 2.5]]) // Relaxed panning bounds
      .on("zoom", (event) => {
        const t = event.transform;

        // 1. Transform Map Geometry normally
        mapLayer.attr("transform", t.toString());

        // 2. Reposition Markers manually to keep them fixed size (Semantic Zoom)
        markers.attr("transform", (d) => {
           const projected = projection(d.coordinates);
           if (!projected) return "translate(0,0)";
           const [x, y] = t.apply(projected); 
           return `translate(${x},${y})`;
        });
      });

    svg.call(zoom);

    // Initial Position Update
    markers.attr("transform", (d) => {
        const projected = projection(d.coordinates);
        if (!projected) return "translate(0,0)";
        return `translate(${projected[0]},${projected[1]})`;
    });

  }, [geoData, countries, dimensions, onCountrySelect]);

  return (
    <div ref={containerRef} className="w-full h-full overflow-hidden relative">
      {/* The map SVG itself */}
      <svg ref={svgRef} width={dimensions.width} height={dimensions.height} className="w-full h-full block" />
      
      {/* Floating Legend - Bottom Right */}
      <div className="absolute bottom-24 right-6 md:right-8 z-0 pointer-events-none md:pointer-events-auto">
        <div className="bg-white/50 backdrop-blur-xl p-4 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] border border-white/60 text-slate-600 ring-1 ring-white/50 max-w-[200px]">
          <div className="font-bold mb-3 text-slate-800 text-[10px] uppercase tracking-widest border-b border-slate-200/50 pb-2">
            Legend / 图例
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.4)] ring-1 ring-white"></span> 
              <span className="text-[10px] font-semibold">互免/免签</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.4)] ring-1 ring-white"></span> 
              <span className="text-[10px] font-semibold">落地签 (VOA)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.4)] ring-1 ring-white"></span> 
              <span className="text-[10px] font-semibold">电子/其他</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const getColorByType = (type: VisaType): string => {
  if (type === VisaType.MUTUAL_FREE || type === VisaType.VISA_FREE) return "#22c55e"; // green-500
  if (type === VisaType.VOA) return "#f97316"; // orange-500
  return "#3b82f6"; // blue-500
};

export default WorldMap;