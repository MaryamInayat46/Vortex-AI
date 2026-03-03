import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, MessageCircle, Zap, ShieldCheck } from 'lucide-react';

const insights = [
    { icon: Sparkles, text: "AI Analysis: Expansion into EMEA markets shows 24% higher LTV potential.", color: "text-volt-green" },
    { icon: MessageCircle, text: "Customer sentiment is up 12% following recent V3 engine update.", color: "text-blue-400" },
    { icon: Zap, text: "Predictive Alert: Potential churn spike detected in Tier 3 accounts.", color: "text-red-400" },
    { icon: ShieldCheck, text: "System Audit: All 2026 security protocols are operating at peak efficiency.", color: "text-deep-violet" },
];

const SmartInsights = () => {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % insights.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const current = insights[index];

    return (
        <div className="glass-card p-6 h-full flex flex-col justify-between border-deep-violet/20 bg-deep-violet/5">
            <div className="flex items-center justify-between mb-4 text-deep-violet">
                <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                    Smart Insights
                </h3>
                <span className="text-[10px] font-bold bg-deep-violet/20 px-2 py-0.5 rounded uppercase">Real-time</span>
            </div>

            <div className="flex-1 flex items-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="flex gap-4 items-start"
                    >
                        <div className={`p-3 rounded-2xl bg-slate-900 border border-slate-800 ${current.color} shadow-lg shadow-black/20`}>
                            <current.icon size={24} />
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed font-medium pt-1">
                            {current.text}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="flex gap-1 mt-6">
                {insights.map((_, i) => (
                    <div
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? "w-8 bg-deep-violet" : "w-1.5 bg-slate-800"}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default SmartInsights;
