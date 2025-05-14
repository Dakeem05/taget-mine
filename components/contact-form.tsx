"use client"

import type React from "react"

import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
  }

  return (
    <section className="py-16 px-4 sm:px-0">
      <div className="w-full flex items-center justify-center">
        <div className="border w-full max-w-[997px] min-h-[733px] rounded-[30px] border-[#0D0D0D] p-4 sm:p-8">
          <div className="max-w-[800px] pt-8 sm:pt-16 mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-[32px] sm:text-[48px] font-bold mb-2">Talk to Us</h2>
            <p className="text-[18px] sm:text-[24px] text-black uppercase">LET'S FIND YOUR TARGET</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                className="bg-[#D3D4D8] h-[64px] text-black placeholder-black rounded-[8px] p-3"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="bg-[#D3D4D8] h-[64px] text-black placeholder-black rounded-[8px] p-3"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                placeholder="E-mail address"
                value={formData.email}
                onChange={handleChange}
                className="bg-[#D3D4D8] h-[64px] text-black placeholder-black rounded-[8px] p-3"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                className="bg-[#D3D4D8] h-[64px] text-black placeholder-black rounded-[8px] p-3"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="bg-[#D3D4D8] h-[64px] text-black placeholder-black rounded-[8px] p-3 w-full"
              required
            />

            <textarea
              name="message"
              placeholder="Tell us something"
              value={formData.message}
              onChange={handleChange}
              className="bg-[#D3D4D8] text-black placeholder-black rounded-[8px] p-3 w-full h-32"
              required
            />

            <button
              type="submit"
              className="w-full bg-black h-[68px] rounded-[6px] text-white py-3 hover:bg-gray-800 transition-colors"
            >
              Send to Taget
            </button>
          </form>
        </div>
        </div>
      </div>
    </section>
  )
}
