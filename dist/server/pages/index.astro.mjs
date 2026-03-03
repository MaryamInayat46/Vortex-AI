import { e as createComponent, g as addAttribute, k as renderHead, l as renderSlot, r as renderTemplate, h as createAstro, m as maybeRenderHead, n as renderComponent } from '../chunks/astro/server_BlPKgtvV.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                 */
import { LayoutDashboard, BarChart3, TrendingUp, Layers, Cpu, Settings, LogOut, Search, Command, Bell, User, Sparkles, MessageCircle, Zap, ShieldCheck, Activity, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Area } from 'recharts';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Vortex AI - Predictive Business Intelligence"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="bg-midnight-obsidian min-h-screen flex text-slate-300"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "F:/Antigravity/Vortex/src/layouts/Layout.astro", void 0);

const $$Sidebar = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: BarChart3, label: "Analytics", active: false },
    { icon: TrendingUp, label: "Growth", active: false },
    { icon: Layers, label: "Data Hub", active: false },
    { icon: Cpu, label: "AI Models", active: false },
    { icon: Settings, label: "Settings", active: false }
  ];
  return renderTemplate`${maybeRenderHead()}<aside class="w-64 h-screen glass-card rounded-none border-y-0 border-l-0 flex flex-col p-6 sticky top-0"> <div class="flex items-center gap-3 mb-10 px-2"> <div class="w-10 h-10 bg-gradient-to-br from-volt-green to-deep-violet rounded-xl flex items-center justify-center shadow-lg shadow-volt-green/20"> <svg viewBox="0 0 24 24" class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2.5"> <path d="M12 3l9 4.5v9L12 21l-9-4.5v-9L12 3z"></path> <path d="M12 12l9-4.5M12 12l-9-4.5M12 12v9"></path> </svg> </div> <span class="text-2xl font-bold tracking-tight text-white italic">VORTEX<span class="text-volt-green">AI</span></span> </div> <nav class="flex-1 space-y-2"> ${navItems.map((item) => renderTemplate`<a href="#"${addAttribute([
    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group",
    item.active ? "bg-volt-green/10 text-volt-green shadow-[inset_0_0_10px_rgba(190,242,100,0.05)]" : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
  ], "class:list")}> ${renderComponent($$result, "item.icon", item.icon, { "size": 20, "className": item.active ? "text-volt-green" : "text-slate-500 group-hover:text-slate-300 transition-colors" })} <span class="font-medium">${item.label}</span> </a>`)} </nav> <div class="pt-6 border-t border-slate-800"> <a href="#" class="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-all duration-300"> ${renderComponent($$result, "LogOut", LogOut, { "size": 20 })} <span class="font-medium">Logout</span> </a> </div> </aside>`;
}, "F:/Antigravity/Vortex/src/components/Sidebar.astro", void 0);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="h-20 glass-card rounded-none border-t-0 border-x-0 flex items-center justify-between px-8 sticky top-0 z-50"> <div class="flex items-center gap-4 bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-2 w-96 group focus-within:border-volt-green/50 transition-colors"> ${renderComponent($$result, "Search", Search, { "size": 18, "class": "text-slate-500 group-focus-within:text-volt-green transition-colors" })} <input type="text" placeholder="Search intelligence..." class="bg-transparent border-none outline-none text-sm text-slate-200 w-full placeholder:text-slate-500"> <div class="flex items-center gap-1 bg-slate-900 border border-slate-800 rounded px-1.5 py-0.5"> ${renderComponent($$result, "Command", Command, { "size": 10, "class": "text-slate-500" })} <span class="text-[10px] font-bold text-slate-500">K</span> </div> </div> <div class="flex items-center gap-6"> <div class="flex items-center gap-2 px-3 py-1.5 glass-card neon-border-volt bg-volt-green/5"> <div class="w-2 h-2 rounded-full bg-volt-green animate-pulse"></div> <span class="text-xs font-bold text-volt-green uppercase tracking-widest">System Online</span> </div> <button class="relative text-slate-400 hover:text-white transition-colors"> ${renderComponent($$result, "Bell", Bell, { "size": 20 })} <span class="absolute -top-1 -right-1 w-2 h-2 bg-deep-violet rounded-full"></span> </button> <div class="flex items-center gap-3 pl-6 border-l border-slate-800"> <div class="text-right"> <p class="text-sm font-bold text-white">Alex Vortex</p> <p class="text-[10px] text-slate-500 uppercase font-medium tracking-tighter">Senior Performance Architect</p> </div> <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-deep-violet to-blue-500 p-[1px]"> <div class="w-full h-full rounded-full bg-slate-950 flex items-center justify-center overflow-hidden"> ${renderComponent($$result, "User", User, { "size": 20, "class": "text-slate-400" })} </div> </div> </div> </div> </header>`;
}, "F:/Antigravity/Vortex/src/components/Navbar.astro", void 0);

const data = [
  { name: "Jan", velocity: 4e3, growth: 2400 },
  { name: "Feb", velocity: 3e3, growth: 1398 },
  { name: "Mar", velocity: 2e3, growth: 9800 },
  { name: "Apr", velocity: 2780, growth: 3908 },
  { name: "May", velocity: 1890, growth: 4800 },
  { name: "Jun", velocity: 2390, growth: 3800 },
  { name: "Jul", velocity: 3490, growth: 4300 }
];
const VelocityGrowthChart = () => {
  return /* @__PURE__ */ jsx("div", { className: "w-full h-[400px]", children: /* @__PURE__ */ jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxs(
    AreaChart,
    {
      data,
      margin: { top: 10, right: 30, left: 0, bottom: 0 },
      children: [
        /* @__PURE__ */ jsxs("defs", { children: [
          /* @__PURE__ */ jsxs("linearGradient", { id: "colorVelocity", x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ jsx("stop", { offset: "5%", stopColor: "#bef264", stopOpacity: 0.3 }),
            /* @__PURE__ */ jsx("stop", { offset: "95%", stopColor: "#bef264", stopOpacity: 0 })
          ] }),
          /* @__PURE__ */ jsxs("linearGradient", { id: "colorGrowth", x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ jsx("stop", { offset: "5%", stopColor: "#7c3aed", stopOpacity: 0.3 }),
            /* @__PURE__ */ jsx("stop", { offset: "95%", stopColor: "#7c3aed", stopOpacity: 0 })
          ] })
        ] }),
        /* @__PURE__ */ jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#1e293b", vertical: false }),
        /* @__PURE__ */ jsx(
          XAxis,
          {
            dataKey: "name",
            stroke: "#64748b",
            fontSize: 12,
            tickLine: false,
            axisLine: false
          }
        ),
        /* @__PURE__ */ jsx(
          YAxis,
          {
            stroke: "#64748b",
            fontSize: 12,
            tickLine: false,
            axisLine: false,
            tickFormatter: (value) => `$${value / 1e3}k`
          }
        ),
        /* @__PURE__ */ jsx(
          Tooltip,
          {
            contentStyle: {
              backgroundColor: "#0f172a",
              border: "1px solid #1e293b",
              borderRadius: "12px",
              color: "#f1f5f9"
            },
            itemStyle: { color: "#f1f5f9" }
          }
        ),
        /* @__PURE__ */ jsx(
          Area,
          {
            type: "monotone",
            dataKey: "velocity",
            stroke: "#bef264",
            strokeWidth: 3,
            fillOpacity: 1,
            fill: "url(#colorVelocity)"
          }
        ),
        /* @__PURE__ */ jsx(
          Area,
          {
            type: "monotone",
            dataKey: "growth",
            stroke: "#7c3aed",
            strokeWidth: 3,
            fillOpacity: 1,
            fill: "url(#colorGrowth)"
          }
        )
      ]
    }
  ) }) });
};

const insights = [
  { icon: Sparkles, text: "AI Analysis: Expansion into EMEA markets shows 24% higher LTV potential.", color: "text-volt-green" },
  { icon: MessageCircle, text: "Customer sentiment is up 12% following recent V3 engine update.", color: "text-blue-400" },
  { icon: Zap, text: "Predictive Alert: Potential churn spike detected in Tier 3 accounts.", color: "text-red-400" },
  { icon: ShieldCheck, text: "System Audit: All 2026 security protocols are operating at peak efficiency.", color: "text-deep-violet" }
];
const SmartInsights = () => {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % insights.length);
    }, 4e3);
    return () => clearInterval(timer);
  }, []);
  const current = insights[index];
  return /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 h-full flex flex-col justify-between border-deep-violet/20 bg-deep-violet/5", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4 text-deep-violet", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold uppercase tracking-widest flex items-center gap-2", children: "Smart Insights" }),
      /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold bg-deep-violet/20 px-2 py-0.5 rounded uppercase", children: "Real-time" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex-1 flex items-center", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 },
        transition: { duration: 0.5, ease: "easeInOut" },
        className: "flex gap-4 items-start",
        children: [
          /* @__PURE__ */ jsx("div", { className: `p-3 rounded-2xl bg-slate-900 border border-slate-800 ${current.color} shadow-lg shadow-black/20`, children: /* @__PURE__ */ jsx(current.icon, { size: 24 }) }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-300 text-sm leading-relaxed font-medium pt-1", children: current.text })
        ]
      },
      index
    ) }) }),
    /* @__PURE__ */ jsx("div", { className: "flex gap-1 mt-6", children: insights.map((_, i) => /* @__PURE__ */ jsx(
      "div",
      {
        className: `h-1.5 rounded-full transition-all duration-500 ${i === index ? "w-8 bg-deep-violet" : "w-1.5 bg-slate-800"}`
      },
      i
    )) })
  ] });
};

const PulseIsland = () => {
  return /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 flex flex-col gap-4 relative overflow-hidden group", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity", children: /* @__PURE__ */ jsx(Activity, { size: 80, className: "text-volt-green" }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "p-2 bg-volt-green/10 rounded-lg", children: /* @__PURE__ */ jsx(TrendingUp, { size: 20, className: "text-volt-green" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold text-slate-400 uppercase tracking-wider", children: "Predictive Revenue" }),
          /* @__PURE__ */ jsx("p", { className: "text-3xl font-bold text-white", children: "$1,248,392.00" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-end", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 px-2.5 py-1 bg-volt-green/10 rounded-full border border-volt-green/20", children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              animate: {
                scale: [1, 1.4, 1],
                opacity: [0.5, 1, 0.5]
              },
              transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              },
              className: "w-2 h-2 rounded-full bg-volt-green shadow-[0_0_8px_rgba(190,242,100,1)]"
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-volt-green uppercase tracking-tighter", children: "AI Active" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 mt-2 text-volt-green", children: [
          /* @__PURE__ */ jsx(ArrowUpRight, { size: 14 }),
          /* @__PURE__ */ jsx("span", { className: "text-sm font-bold", children: "+14.2%" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4 z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xs text-slate-500 mb-2", children: [
        /* @__PURE__ */ jsx("span", { children: "Current Velocity" }),
        /* @__PURE__ */ jsx("span", { className: "text-slate-300 font-medium", children: "84% of Goal" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "h-1.5 w-full bg-slate-800 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { width: 0 },
          animate: { width: "84%" },
          transition: { duration: 1.5, ease: "easeOut" },
          className: "h-full bg-gradient-to-r from-volt-green to-deep-violet"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-2 text-[10px] text-slate-500 italic z-10", children: "AI Analysis: Market conditions favor expansion into EMEA regions." })
  ] });
};

const $$Astro = createAstro();
const $$KPIWidget = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$KPIWidget;
  const { label, value, trend, isPositive = true } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="glass-card p-6 flex flex-col justify-between hover:border-slate-700 transition-colors group"> <div> <h3 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">${label}</h3> <p class="text-2xl font-bold text-white tracking-tight">${value}</p> </div> <div class="flex items-center justify-between mt-4"> <div${addAttribute([
    "flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-lg",
    isPositive ? "text-volt-green bg-volt-green/10" : "text-red-400 bg-red-400/10"
  ], "class:list")}> ${isPositive ? renderTemplate`${renderComponent($$result, "ArrowUpRight", ArrowUpRight, { "size": 14 })}` : renderTemplate`${renderComponent($$result, "ArrowDownRight", ArrowDownRight, { "size": 14 })}`} ${trend} </div> <div class="flex items-end gap-[2px] h-8"> ${[40, 70, 45, 90, 65, 80, 50, 95].map((h, i) => renderTemplate`<div${addAttribute([
    "w-1 rounded-full transition-all duration-500 group-hover:opacity-100",
    i === 7 ? "opacity-100" : "opacity-40",
    isPositive ? "bg-volt-green" : "bg-red-400"
  ], "class:list")}${addAttribute(`height: ${h}%`, "style")}></div>`)} </div> </div> </div>`;
}, "F:/Antigravity/Vortex/src/components/KPIWidget.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Vortex AI | Predictive Business Intelligence" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Sidebar", $$Sidebar, {})} ${maybeRenderHead()}<main class="flex-1 flex flex-col min-h-screen overflow-hidden"> ${renderComponent($$result2, "Navbar", $$Navbar, {})} <div class="flex-1 p-8 overflow-y-auto bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.05),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(190,242,100,0.05),transparent_40%)]"> <div class="max-w-7xl mx-auto space-y-8"> <header> <h1 class="text-4xl font-bold text-white tracking-tight mb-2">Executive Dashboard</h1> <p class="text-slate-400">Real-time predictive analysis and market velocity metrics.</p> </header> <div class="grid grid-cols-4 gap-6 auto-rows-[200px]"> <!-- Cell A: Multi-line Graph (Large) --> <div class="col-span-4 lg:col-span-3 row-span-2 glass-card p-6 flex flex-col overflow-hidden"> <div class="flex items-center justify-between mb-8"> <div> <h3 class="text-lg font-bold text-white tracking-tight">Market Velocity vs. Growth</h3> <p class="text-xs text-slate-500 font-medium">Predictive projection for Q3 2026</p> </div> <div class="flex items-center gap-4"> <div class="flex items-center gap-2"> <div class="w-3 h-3 rounded-full bg-volt-green"></div> <span class="text-xs font-bold text-slate-400">Velocity</span> </div> <div class="flex items-center gap-2"> <div class="w-3 h-3 rounded-full bg-deep-violet"></div> <span class="text-xs font-bold text-slate-400">Growth</span> </div> </div> </div> <div class="flex-1 mt-auto"> ${renderComponent($$result2, "VelocityGrowthChart", VelocityGrowthChart, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "F:/Antigravity/Vortex/src/components/charts/VelocityGrowthChart", "client:component-export": "default" })} </div> </div> <!-- Cell B: Smart Insights (Medium) --> <div class="col-span-4 lg:col-span-1 row-span-2"> ${renderComponent($$result2, "SmartInsights", SmartInsights, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "F:/Antigravity/Vortex/src/components/SmartInsights", "client:component-export": "default" })} </div> <!-- Cell Pulse: Predictive Revenue (Medium/Large depending on view) --> <div class="col-span-4 lg:col-span-2 row-span-1"> ${renderComponent($$result2, "PulseIsland", PulseIsland, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "F:/Antigravity/Vortex/src/components/PulseIsland", "client:component-export": "default" })} </div> <!-- Cell C: KPI ARR --> <div class="col-span-2 lg:col-span-1 row-span-1"> ${renderComponent($$result2, "KPIWidget", $$KPIWidget, { "label": "Current ARR", "value": "$1.2M", "trend": "+14.2%" })} </div> <!-- Cell D: KPI LTV/Churn (Mixed) --> <div class="col-span-2 lg:col-span-1 row-span-1"> ${renderComponent($$result2, "KPIWidget", $$KPIWidget, { "label": "Churn Rate", "value": "1.8%", "trend": "-2.4%", "isPositive": false })} </div> </div> </div> </div> </main> ` })}`;
}, "F:/Antigravity/Vortex/src/pages/index.astro", void 0);

const $$file = "F:/Antigravity/Vortex/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
