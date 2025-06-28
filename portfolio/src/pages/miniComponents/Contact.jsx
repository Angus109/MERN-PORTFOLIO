"use client"
import { useState } from "react"
import { Calendar, Mail, MessageSquare, Phone, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import axios from "axios"
import { toast } from "react-toastify"

const Contact = ({ user }) => {
  const [formStep, setFormStep] = useState("contact")
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  })

  const domain = process.env.BACKEND_URL

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await axios.post(
        `${domain}/api/v1/message/send`,
        {
          senderName: formData.firstName + " " + formData.lastName,
          subject: formData.subject,
          message: formData.message,
          email: formData.email,
          service: formData.service,
          date: formData.date,
          time: formData.time,
          notes: formData.notes,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        },
      )

      if (response.status === 200) {
        toast.success(response.data.message)
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
          service: "",
          date: "",
          time: "",
          notes: "",
        })
      } else {
        throw new Error("Failed to send")
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to send message")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="w-full py-12 sm:py-16 lg:py-20">
      <div className="w-full">
        {/* Section Title */}
        <div className="relative mb-12 sm:mb-16">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-[8px] sm:tracking-[12px] lg:tracking-[15px] relative inline-block">
              <span className="bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-400 bg-clip-text text-transparent">
                CONTACT
              </span>
              <span className="ml-2 sm:ml-4 text-blue-600 dark:text-blue-400">ME</span>
            </h1>
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 dark:bg-slate-700 -z-10"></div>
          </div>
        </div>

        {/* Section Description */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground mb-4">
            Get in Touch
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Let's Discuss Your Project
          </h3>
          <p className="max-w-3xl mx-auto text-muted-foreground text-base sm:text-lg md:text-xl">
            Have a question or ready to start your next project? Reach out to me.
          </p>
        </div>

        {/* Contact Content */}
        <div className="w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg bg-white dark:bg-slate-800">
              <CardHeader className="space-y-4">
                <div className="w-full">
                  <RadioGroup
                    value={formStep}
                    onValueChange={(value) => setFormStep(value)}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="contact" id="contact" />
                      <Label htmlFor="contact" className="cursor-pointer text-sm sm:text-base">
                        Contact Us
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="booking" id="booking" />
                      <Label htmlFor="booking" className="cursor-pointer text-sm sm:text-base">
                        Book a Session
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                <CardTitle className="text-lg sm:text-xl">
                  {formStep === "contact" ? "Contact Form" : "Book a Consultation"}
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  {formStep === "contact"
                    ? "Fill out the form below and we'll get back to you as soon as possible."
                    : "Schedule a free consultation with our experts to discuss your project."}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name" className="text-sm sm:text-base">
                        First name
                      </Label>
                      <Input
                        id="first-name"
                        placeholder="John"
                        required
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className="text-sm sm:text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name" className="text-sm sm:text-base">
                        Last name
                      </Label>
                      <Input
                        id="last-name"
                        placeholder="Doe"
                        required
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className="text-sm sm:text-base"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm sm:text-base">
                      Email
                    </Label>
                    <Input
                      id="email"
                      placeholder="john.doe@example.com"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="text-sm sm:text-base"
                    />
                  </div>
                  {formStep === "contact" ? (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-sm sm:text-base">
                          Subject
                        </Label>
                        <Input
                          id="subject"
                          placeholder="Project Inquiry"
                          required
                          value={formData.subject}
                          onChange={(e) => handleInputChange("subject", e.target.value)}
                          className="text-sm sm:text-base"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-sm sm:text-base">
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your project or inquiry..."
                          className="min-h-[120px] text-sm sm:text-base resize-none"
                          required
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="service" className="text-sm sm:text-base">
                          Service
                        </Label>
                        <Select
                          required
                          value={formData.service}
                          onValueChange={(value) => handleInputChange("service", value)}
                        >
                          <SelectTrigger className="text-sm sm:text-base">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="web">Web Development</SelectItem>
                            <SelectItem value="mobile">Mobile Development</SelectItem>
                            <SelectItem value="design">UI/UX Design</SelectItem>
                            <SelectItem value="consulting">Digital Consulting</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="date" className="text-sm sm:text-base">
                          Preferred Date
                        </Label>
                        <Input
                          id="date"
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) => handleInputChange("date", e.target.value)}
                          className="text-sm sm:text-base"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time" className="text-sm sm:text-base">
                          Preferred Time
                        </Label>
                        <Select
                          required
                          value={formData.time}
                          onValueChange={(value) => handleInputChange("time", value)}
                        >
                          <SelectTrigger className="text-sm sm:text-base">
                            <SelectValue placeholder="Select a time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">Morning (9AM - 12PM)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (1PM - 5PM)</SelectItem>
                            <SelectItem value="evening">Evening (6PM - 8PM)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="notes" className="text-sm sm:text-base">
                          Additional Notes
                        </Label>
                        <Textarea
                          id="notes"
                          placeholder="Tell us briefly about your project..."
                          className="min-h-[80px] text-sm sm:text-base resize-none"
                          value={formData.notes}
                          onChange={(e) => handleInputChange("notes", e.target.value)}
                        />
                      </div>
                    </>
                  )}
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : formStep === "contact" ? (
                      "Send Message"
                    ) : (
                      "Book Session"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="flex flex-col justify-center space-y-6 sm:space-y-8">
              <div className="flex items-start space-x-4">
                <div className="rounded-full bg-primary/10 p-3 flex-shrink-0">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg sm:text-xl font-bold">Email Us</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">Our friendly team is here to help.</p>
                  <a
                    href={`mailto:${user.email}`}
                    className="mt-2 block font-medium text-primary hover:underline text-sm sm:text-base break-all"
                  >
                    {user.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="rounded-full bg-primary/10 p-3 flex-shrink-0">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg sm:text-xl font-bold">Call Us</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">Mon-Fri from 8am to 6pm.</p>
                  <a
                    href={`tel:${user.phone}`}
                    className="mt-2 block font-medium text-primary hover:underline text-sm sm:text-base"
                  >
                    {user.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="rounded-full bg-primary/10 p-3 flex-shrink-0">
                  <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg sm:text-xl font-bold">Live Chat</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">Our friendly team is here to help.</p>
                  <Button
                    variant="link"
                    className="mt-2 h-auto p-0 text-primary hover:underline text-sm sm:text-base"
                    asChild
                  >
                    <a href="https://calendly.com/angusdev-aeworks/30min" target="_blank" rel="noopener noreferrer">
                      Start a live chat
                    </a>
                  </Button>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="rounded-full bg-primary/10 p-3 flex-shrink-0">
                  <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg sm:text-xl font-bold">Office Hours</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">Come visit us in our headquarters.</p>
                  <p className="mt-2 text-xs sm:text-sm">
                    Monday - Friday: 9am - 6pm
                    <br />
                    Saturday: 10am - 3pm
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
