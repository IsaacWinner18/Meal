'use client'

import { useState, useEffect } from "react"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { ArrowUp, Flame } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image";
import Link from "next/link"
import Footer from "@/components/Footer"



export default function Home() {
  const [balance, setBalance] = useState(1.00)
  const [progress, setProgress] = useState(0)
  const [canClaim, setCanClaim] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setBalance(prev => prev + (100.00 / 3600)) // Increment per second based on hourly rate
    }, 1000)
    return () => clearInterval(timer);
  }, [])

  const handleClaim = () => {
    if (canClaim) {
      setBalance(prev => prev + 1000)
      setProgress(0)
      setCanClaim(false)
      setTimeout(() => {
        setCanClaim(true)
      }, 5000) // Reset after 5 seconds
    }
  }

  useEffect(() => {
    if (!canClaim) {
      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(timer)
            return 100
          }
          return prev + 2
        })
      }, 100)
      return () => clearInterval(timer);
    }
  }, [canClaim])

  return (
    (<div className="max-w-md mx-auto p-2 ">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h1 className="text-lg font-bold">Isaac Winner</h1>
          <p className="text-gray-500 text-sm shadow-xl shadow-neutral-300">ID: 0087322</p>
        </div>
        <div className="rounded-lg shadow-xl shadow-green-700">
          {/* <Flame className="text-blue-600" size={24} /> */}
          <Image src='/wallet.gif' alt='Wallet.gif' width={45} height={50} />
        </div>
      </div>
      <div className="bg-gradient-to-r from-neutral-200 to-green-400 shadow-inner shadow-green-800 rounded-3xl p-3 mb-10 mt-5">
        <h2 className="text-center mb-2 font-bold">Current Balance</h2>
        <div
          className="flex items-center justify-center gap-2 text-3xl font-bold mb-2">
          <ArrowUp className="text-blue-200 bg-green-600 rounded-full p-1" />
          <span className="text-neutral-800">{balance.toFixed(2)}</span>
          <span className="text-neutral-200 shadow-xl shadow-blue-100 hover:text-neutral-300">MLC</span>
        </div>
        <div className="bg-green-300 rounded-full text-center my-4 shadow-inner shadow-green-600 inset-">
          <span className="text-blue-950 text-xs font-mono">EARNING RATE +400.00 MLC/hr</span>
        </div>
      </div>
      <div className="bg-gradient-to-t from-green-400 to-white rounded-3xl px-6 py-5 shadow-xl shadow-blue-00">
        <h2 className="text-lg text-center mb-3">Next GRAB!</h2>
        <Progress value={progress} className="mb-4" />
        <div className="mx-16">
        <motion.div whileTap={{ scale: 0.95 }}>
          <Button
            onClick={handleClaim}
            disabled={!canClaim}
            className="w-full py-6 text-xl bg-green-700 shadow-inner shadow-green-200 hover:bg-green-600 transition-colors">
            Claim
          </Button>
        </motion.div>
        </div>
        <div className="text-center text-white font-bold font-mono mt-1">
          1000
          <span> <i>MLC</i></span> 
           <span> Available</span> 
          </div>
      </div>

      <Footer />
      
    </div>)
  );
}

