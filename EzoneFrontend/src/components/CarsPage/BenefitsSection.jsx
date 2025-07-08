import React from 'react'
import { ShieldCheck, Clock, Award, Headphones } from "lucide-react"


const BenefitsSection = () => {
  return (
    <div className="bg-indigo-100 rounded-lg p-6 sticky top-4">
      <h2 className="text-2xl font-bold text-center mb-6 text-primary-blue">TRAVEL WITH CONFIDENCE</h2>

      <div className="space-y-8">
        <div className="flex gap-4">
          <div className="bg-white p-3 rounded-full h-14 w-14 flex items-center justify-center shadow-sm">
            <Award className="h-8 w-8 text-primary-blue" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-primary-blue">Premium Experience</h3>
            <ul className="mt-2 space-y-1">
              <li className="flex items-start gap-2">
                <span className="text-primary-blue">→</span>
                <span>India's largest car rental company</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-blue">→</span>
                <span>The best prices beyond imagination</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-blue">→</span>
                <span>Instant booking in 3 steps</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="bg-white p-3 rounded-full h-14 w-14 flex items-center justify-center shadow-sm">
            <Headphones className="h-8 w-8 text-primary-blue" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-primary-blue">Customer Satisfaction</h3>
            <ul className="mt-2 space-y-1">
              <li className="flex items-start gap-2">
                <span className="text-primary-blue">→</span>
                <span>Affordable, easy and user friendly</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-blue">→</span>
                <span>Book through web or call</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-blue">→</span>
                <span>Pay by cash or card</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="bg-white p-3 rounded-full h-14 w-14 flex items-center justify-center shadow-sm">
            <ShieldCheck className="h-8 w-8 text-primary-blue" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-primary-blue">Safety Guaranteed</h3>
            <ul className="mt-2 space-y-1">
              <li className="flex items-start gap-2">
                <span className="text-primary-blue">→</span>
                <span>Verified drivers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-blue">→</span>
                <span>Track before and after your trip</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-blue">→</span>
                <span>100% Transparency</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="bg-white p-3 rounded-full h-14 w-14 flex items-center justify-center shadow-sm">
            <Clock className="h-8 w-8 text-primary-blue" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-primary-blue">Time Efficiency</h3>
            <ul className="mt-2 space-y-1">
              <li className="flex items-start gap-2">
                <span className="text-primary-blue">→</span>
                <span>Punctual service guaranteed</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-blue">→</span>
                <span>24/7 customer support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-blue">→</span>
                <span>Flexible booking modifications</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BenefitsSection