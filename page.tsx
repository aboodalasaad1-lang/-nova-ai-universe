"use client"

import { motion } from "framer-motion"
import { Users, DollarSign, MessageSquare, Image, Video, TrendingUp, Activity } from "lucide-react"

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-white/60">Platform analytics and management</p>
      </motion.div>

      <div className="grid md:grid-cols-4 gap-4">
        {[
          { label: "Total Users", value: "50,234", icon: Users, color: "text-nova-blue", change: "+12%" },
          { label: "Revenue", value: "$124,500", icon: DollarSign, color: "text-green-400", change: "+8%" },
          { label: "Messages", value: "1.2M", icon: MessageSquare, color: "text-nova-purple", change: "+15%" },
          { label: "Active Now", value: "2,456", icon: Activity, color: "text-nova-pink", change: "+5%" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="card-glass"
          >
            <div className="flex items-center justify-between mb-2">
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
              <span className="text-sm text-green-400">{stat.change}</span>
            </div>
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="text-sm text-white/60">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card-glass"
        >
          <h3 className="text-lg font-semibold mb-4">AI Usage</h3>
          <div className="space-y-4">
            {[
              { type: "Chat Messages", count: "850K", icon: MessageSquare, color: "bg-nova-blue" },
              { type: "Images Generated", count: "125K", icon: Image, color: "bg-nova-purple" },
              { type: "Videos Generated", count: "45K", icon: Video, color: "bg-nova-pink" },
            ].map((item) => (
              <div key={item.type} className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center`}>
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">{item.type}</p>
                  <p className="text-sm text-white/60">{item.count} this month</p>
                </div>
                <TrendingUp className="w-5 h-5 text-green-400" />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="card-glass"
        >
          <h3 className="text-lg font-semibold mb-4">Subscription Distribution</h3>
          <div className="space-y-4">
            {[
              { plan: "Free", users: "35,000", percentage: 70, color: "bg-white/20" },
              { plan: "Pro", users: "10,000", percentage: 20, color: "bg-nova-blue" },
              { plan: "Premium", users: "4,000", percentage: 8, color: "bg-nova-purple" },
              { plan: "Ultimate", users: "1,234", percentage: 2, color: "bg-nova-pink" },
            ].map((sub) => (
              <div key={sub.plan}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">{sub.plan}</span>
                  <span className="text-sm text-white/60">{sub.users} users</span>
                </div>
                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${sub.percentage}%` }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className={`h-full rounded-full ${sub.color}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
