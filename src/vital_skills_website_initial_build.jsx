// src/vital_skills_website_initial_build.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck, Cloud, Server, Lock, Phone, Mail, MapPin,
  CalendarDays, BookOpen, GraduationCap, Users, CheckCircle2
} from "lucide-react";

// Minimal UI shims shipped in the ZIP:
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const config = {
  brand: "VitallSkills First Aid",
  tagline: "Accredited First Aid & CPR Training across North Queensland",
  phone: "+61 400 000 000",
  email: "info@vitallskills.life",
  address: "Townsville & On-site Australia-wide",
  rto: "RTO ####",
};

const courses = [
  { code: "HLTAID009", name: "Provide CPR", duration: "2–3 hrs", price: "$65",
    blurb: "Hands-on CPR with AED practice. Assessment aligned to current guidelines." },
  { code: "HLTAID011", name: "Provide First Aid", duration: "1 day (blended)", price: "$145",
    blurb: "Workplace first aid — bleeding, shock, burns, asthma, anaphylaxis, fractures, more." },
  { code: "HLTAID012", name: "Education & Care", duration: "1 day (blended)", price: "$165",
    blurb: "Tailored to childcare and schools, including asthma and anaphylaxis." },
];

const schedule = [
  { date: "26 Aug 2025", course: "HLTAID011 Provide First Aid", location: "Townsville CBD", seats: 8 },
  { date: "29 Aug 2025", course: "HLTAID009 Provide CPR", location: "Thuringowa Library", seats: 12 },
  { date: "02 Sep 2025", course: "HLTAID012 Education & Care", location: "Aitkenvale", seats: 6 },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

const Feature = ({ icon: Icon, title, children }) => (
  <Card className="h-full">
    <CardHeader className="flex flex-row items-center gap-3">
      <div className="rounded-2xl p-3" style={{ background: "#ecfdf5" }}>
        <Icon className="h-6 w-6" />
      </div>
      <CardTitle className="text-lg">{title}</CardTitle>
    </CardHeader>
    <CardContent className="text-sm" style={{ color: "#6b7280" }}>
      {children}
    </CardContent>
  </Card>
);

const CourseCard = ({ course }) => (
  <Card className="flex flex-col">
    <CardHeader>
      <div className="flex items-center justify-between">
        <Badge className="text-emerald-700">{course.code}</Badge>
        <Badge>{course.duration}</Badge>
      </div>
      <CardTitle className="text-xl mt-2">{course.name}</CardTitle>
    </CardHeader>
    <CardContent style={{ color: "#6b7280" }}>
      {course.blurb}
    </CardContent>
    <CardFooter className="mt-auto flex items-center justify-between">
      <div className="font-semibold">{course.price}</div>
      <Button className="bg-emerald-600" onClick={() => scrollToId("book")}>Book now</Button>
    </CardFooter>
  </Card>
);

export default function VitallSkillsSite() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b" style={{ backdropFilter: "saturate(180%) blur(8px)", background: "rgba(255,255,255,0.8)" }}>
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-emerald-600 flex items-center justify-center">
              <span className="text-white font-bold">VS</span>
            </div>
            <div>
              <div className="font-semibold leading-tight">{config.brand}</div>
              <div className="text-xs leading-tight" style={{ color: "#6b7280" }}>{config.tagline}</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:text-emerald-700" onClick={() => scrollToId("courses")}>Courses</a>
            <a className="hover:text-emerald-700" onClick={() => scrollToId("schedule")}>Schedule</a>
            <a className="hover:text-emerald-700" onClick={() => scrollToId("security")}>Security</a>
            <a className="hover:text-emerald-700" onClick={() => scrollToId("about")}>About</a>
            <a className="hover:text-emerald-700" onClick={() => scrollToId("contact")}>Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button onClick={() => scrollToId("lms")}>LMS Login</Button>
            <Button className="bg-emerald-600" onClick={() => scrollToId("book")}>Book</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section>
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
              <Badge className="mb-4">{config.rto}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Confident, compliant, hands-on first aid training
              </h1>
              <p className="mt-4 text-lg" style={{ color: "#6b7280" }}>
                Small classes. Real scenarios. Certificates issued fast.
                Public courses in Townsville or we come on-site to you.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button className="bg-emerald-600" onClick={() => scrollToId("courses")}>Explore courses</Button>
                <Button onClick={() => scrollToId("schedule")}>Next available dates</Button>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm" style={{ color: "#6b7280" }}>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> ASQA-aligned assessments</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Blended learning options</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Group bookings welcome</div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border">
                <div className="flex items-center gap-3 mb-4">
                  <CalendarDays className="h-5 w-5" />
                  <h3 className="font-semibold text-lg">Next session quick-book</h3>
                </div>
                <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Input placeholder="Full name" required />
                  <Input type="email" placeholder="Email" required />
                  <Input placeholder="Mobile" />
                  <select className="border rounded-md h-10 px-3">
                    {courses.map((c) => (
                      <option key={c.code}>{c.code} — {c.name}</option>
                    ))}
                  </select>
                  <Input type="date" />
                  <Button className="bg-emerald-600 md:col-span-2">Request a spot</Button>
                </form>
                <p className="text-xs mt-3" style={{ color: "#6b7280" }}>We’ll confirm availability and send a payment link. No charge until confirmed.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust & Hybrid infra */}
      <section id="security" className="container mx-auto px-4 py-14">
        <div className="grid md:grid-cols-4 gap-4">
          <Feature icon={ShieldCheck} title="Compliance-first">
            Training aligned with current ASQA standards and First Aid Guidelines.
          </Feature>
          <Feature icon={Cloud} title="Cloud services">
            LMS and student records in AU regions with RBAC + MFA.
          </Feature>
          <Feature icon={Server} title="On-premise control">
            Local servers for continuity with encrypted backups to cloud.
          </Feature>
          <Feature icon={Lock} title="Security by design">
            Zero-Trust principles, audited access, and data retention policies.
          </Feature>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="border-y" style={{ background: "#f8fafc" }}>
        <div className="container mx-auto px-4 py-14">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <BookOpen className="h-5 w-5" /> Popular Courses
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((c) => (<CourseCard key={c.code} course={c} />))}
          </div>
          <p className="text-sm mt-4" style={{ color: "#6b7280" }}>
            Need group pricing or after-hours? We can come to your workplace. Minimum numbers apply.
          </p>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="container mx-auto px-4 py-14">
        <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
          <CalendarDays className="h-5 w-5" /> Upcoming Dates
        </h2>
        <div className="overflow-x-auto rounded-2xl border">
          <table className="min-w-full text-sm">
            <thead style={{ background: "#f8fafc" }}>
              <tr className="text-left">
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Course</th>
                <th className="px-4 py-3">Location</th>
                <th className="px-4 py-3">Seats left</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((s, i) => (
                <tr key={i} className="border-t">
                  <td className="px-4 py-3 whitespace-nowrap">{s.date}</td>
                  <td className="px-4 py-3">{s.course}</td>
                  <td className="px-4 py-3">{s.location}</td>
                  <td className="px-4 py-3">{s.seats}</td>
                  <td className="px-4 py-3 text-right">
                    <Button className="bg-emerald-600" onClick={() => scrollToId("book")}>Book</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm mt-3" style={{ color: "#6b7280" }}>
          Can’t see a suitable date? <a className="underline" onClick={() => scrollToId("contact")}>Contact us</a>.
        </p>
      </section>

      {/* LMS */}
      <section id="lms" className="container mx-auto px-4 py-14 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-2">
            <GraduationCap className="h-5 w-5" /> Blended Learning (LMS)
          </h2>
          <p style={{ color: "#6b7280" }}>
            Complete theory online at your pace, then attend a short practical session for assessment.
          </p>
          <div className="mt-4 flex gap-3">
            <Button className="bg-emerald-600">Go to LMS</Button>
            <Button onClick={() => scrollToId("faq")}>How it works</Button>
          </div>
        </div>
        <div className="rounded-2xl border p-6">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Mobile-friendly modules</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Progress saved automatically</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Secure payments & invoicing</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Certificates emailed quickly</li>
          </ul>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-y" style={{ background: "#f8fafc" }}>
        <div className="container mx-auto px-4 py-14 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold flex items-center gap-2 mb-2">
              <Users className="h-5 w-5" /> About {config.brand}
            </h2>
            <p style={{ color: "#6b7280" }}>
              We’re a practical, community-minded First Aid training team based in North Queensland.
            </p>
            <div className="mt-5 grid sm:grid-cols-3 gap-3 text-sm">
              <Card><CardContent className="pt-4"><div className="text-3xl font-bold">4.9★</div><div style={{ color: "#6b7280" }}>Average rating</div></CardContent></Card>
              <Card><CardContent className="pt-4"><div className="text-3xl font-bold">10k+</div><div style={{ color: "#6b7280" }}>Learners trained</div></CardContent></Card>
              <Card><CardContent className="pt-4"><div className="text-3xl font-bold">2019</div><div style={{ color: "#6b7280" }}>Established</div></CardContent></Card>
            </div>
          </div>
          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold mb-2">Our hybrid infrastructure</h3>
            <p className="text-sm" style={{ color: "#6b7280" }}>
              On-prem systems + secure AU cloud services for continuity and controlled student records access.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mt-4 text-sm">
              <div className="flex items-start gap-2"><ShieldCheck className="h-4 w-4 mt-1" /><span>RBAC + MFA for staff portals</span></div>
              <div className="flex items-start gap-2"><Lock className="h-4 w-4 mt-1" /><span>Encryption in transit & at rest</span></div>
              <div className="flex items-start gap-2"><Cloud className="h-4 w-4 mt-1" /><span>AU-hosted LMS & payments</span></div>
              <div className="flex items-start gap-2"><Server className="h-4 w-4 mt-1" /><span>Local servers for classroom resources</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Book */}
      <section id="book" className="container mx-auto px-4 py-14">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Book a course</h2>
            <p className="text-sm" style={{ color: "#6b7280" }}>
              Complete the form and we’ll confirm availability and payment options.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Input placeholder="First name" required />
              <Input placeholder="Last name" required />
              <Input type="email" placeholder="Email" required />
              <Input placeholder="Mobile" />
              <select className="border rounded-md h-10 px-3 sm:col-span-2">
                <option value="">Select a course…</option>
                {courses.map((c) => (<option key={c.code} value={c.code}>{c.code} — {c.name}</option>))}
              </select>
              <Textarea className="sm:col-span-2" placeholder="Accessibility needs, invoice details, or preferred dates" />
              <Button className="bg-emerald-600 sm:col-span-2">Submit booking request</Button>
            </form>
          </div>
          <div>
            <Card>
              <CardHeader><CardTitle>Need a workplace quote?</CardTitle></CardHeader>
              <CardContent className="text-sm" style={{ color: "#6b7280" }}>
                Provide your location, preferred dates, and approximate numbers — we’ll handle the rest.
              </CardContent>
              <CardFooter><Button onClick={() => scrollToId("contact")}>Get a quote</Button></CardFooter>
            </Card>
            <div className="mt-4 rounded-xl border p-4 text-sm">
              <div className="font-medium mb-1">Need help choosing?</div>
              <p style={{ color: "#6b7280" }}>CPR only is HLTAID009. Most workplaces require HLTAID011 (Provide First Aid).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container mx-auto px-4 py-14">
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <p className="text-sm mb-4" style={{ color: "#6b7280" }}>
          We’re happy to help with bookings, invoices, or custom sessions.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6 text-sm">
              <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> {config.phone}</div>
              <div className="flex items-center gap-2 mt-2"><Mail className="h-4 w-4" /> {config.email}</div>
              <div className="flex items-center gap-2 mt-2"><MapPin className="h-4 w-4" /> {config.address}</div>
            </CardContent>
          </Card>
          <Card className="md:col-span-2">
            <CardContent className="pt-6">
              <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Input placeholder="Name" required />
                <Input type="email" placeholder="Email" required />
                <Input className="sm:col-span-2" placeholder="Subject" />
                <Textarea className="sm:col-span-2" placeholder="Message" rows={5} />
                <Button className="bg-emerald-600 sm:col-span-2">Send message</Button>
              </form>
              <p className="text-xs mt-3" style={{ color: "#6b7280" }}>By contacting us you agree to our privacy notice.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-slate-100" style={{ background: "#020617" }}>
        <div className="container mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">
          <div>
            <div className="font-semibold text-lg">{config.brand}</div>
            <p className="text-slate-300 text-sm mt-2">{config.tagline}</p>
            <div className="text-slate-400 text-xs mt-4">© {new Date().getFullYear()} {config.brand}. All rights reserved.</div>
          </div>
          <div>
            <div className="font-semibold mb-2">Courses</div>
            <ul className="text-sm text-slate-300 space-y-1">
              {courses.map((c) => (
                <li key={c.code} className="hover:underline cursor-pointer" onClick={() => scrollToId("courses")}>
                  {c.code} {c.name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Company</div>
            <ul className="text-sm text-slate-300 space-y-1">
              <li><a onClick={() => scrollToId("about")} className="hover:underline">About</a></li>
              <li><a onClick={() => scrollToId("security")} className="hover:underline">Security & compliance</a></li>
              <li><a className="hover:underline">Privacy</a></li>
              <li><a className="hover:underline">Terms</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Contact</div>
            <ul className="text-sm text-slate-300 space-y-1">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> {config.phone}</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> {config.email}</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {config.address}</li>
            </ul>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: "rgba(148,163,184,0.4)" }}>
          <div className="container mx-auto px-4 py-4 text-xs text-slate-400 flex flex-wrap items-center justify-between gap-2">
            <span>ABN: 00 000 000 000 (placeholder)</span>
            <span>{config.rto}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
