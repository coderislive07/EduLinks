"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactForm() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6 lg:p-8"
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_VERCEL_URL}/placeholder.svg?height=400&width=400)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right top",
      }}
    >
      <Card className="max-w-2xl mx-auto shadow-sm">
        <CardHeader className="space-y-2">
          <CardTitle className="text-3xl font-serif text-center">Contact Us</CardTitle>
          <p className="text-center text-gray-600">Trusted Expertise for Your International Goals</p>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Enter your Details*</Label>
              <Input id="name" placeholder="Name*" />
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-1">
                <Select defaultValue="in">
                  <SelectTrigger>
                    <SelectValue>
                      <span className="flex items-center">
                        <span className="mr-2">🇮🇳</span>
                        +91
                      </span>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="in">
                      <span className="flex items-center">
                        <span className="mr-2">🇮🇳</span>
                        +91
                      </span>
                    </SelectItem>
                    {/* Add more country codes as needed */}
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-3">
                <Input placeholder="Mobile*" type="tel" />
              </div>
            </div>

            <div>
              <Input placeholder="Email*" type="email" />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <Input placeholder="City*" />
              </div>
              <div>
                <Input placeholder="Age*" type="number" />
              </div>
              <div>
                <Input placeholder="Occupation*" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Select defaultValue="nz">
                  <SelectTrigger>
                    <SelectValue>
                      <span className="flex items-center">
                        <span className="mr-2">🇳🇿</span>
                        New Zealand
                      </span>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nz">
                      <span className="flex items-center">
                        <span className="mr-2">🇳🇿</span>
                        New Zealand
                      </span>
                    </SelectItem>
                    {/* Add more countries as needed */}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select defaultValue="student">
                  <SelectTrigger>
                    <SelectValue>Student Visa</SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Student Visa</SelectItem>
                    {/* Add more visa types as needed */}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button type="submit" className="bg-[#40E0E7] hover:bg-[#3bccd3] text-black">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

