import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowUpRight, Activity } from 'lucide-react';

const PulseIsland = () => {
    return (
        <div className="glass-card p-6 flex flex-col gap-4 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Activity size={80} className="text-volt-green" />
            </div>

            <div className="flex items-center justify-between z-10">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-volt-green/10 rounded-lg">
                        <TrendingUp size={20} className="text-volt-green" />
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Predictive Revenue</h3>
                        <p className="text-3xl font-bold text-white">$1,248,392.00</p>
                    </div>
                </div>

                <div className="flex flex-col items-end">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 bg-volt-green/10 rounded-full border border-volt-green/20">
                        <motion.div
                            animate={{
                                scale: [1, 1.4, 1],
                                opacity: [0.5, 1, 0.5]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="w-2 h-2 rounded-full bg-volt-green shadow-[0_0_8px_rgba(190,242,100,1)]"
                        />
                        <span className="text-[10px] font-bold text-volt-green uppercase tracking-tighter">AI Active</span>
                    </div>
                    <div className="flex items-center gap-1 mt-2 text-volt-green">
                        <ArrowUpRight size={14} />
                        <span className="text-sm font-bold">+14.2%</span>
                    </div>
                </div>
            </div>

            <div className="mt-4 z-10">
                <div className="flex justify-between text-xs text-slate-500 mb-2">
                    <span>Current Velocity</span>
                    <span className="text-slate-300 font-medium">84% of Goal</span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "84%" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-volt-green to-deep-violet"
                    />
                </div>
            </div>

            <div className="mt-2 text-[10px] text-slate-500 italic z-10">
                AI Analysis: Market conditions favor expansion into EMEA regions.
            </div>
        </div>
    );
};

export default PulseIsland;
