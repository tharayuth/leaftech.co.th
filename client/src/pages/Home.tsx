import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Eye, Cpu, Radio, BarChart3, Shield, MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Design Philosophy: Tech Minimalism with Depth
 * - Deep Navy Blue (#1a2a4a) as primary color for trust and stability
 * - Bright Green (from Leaftech logo) as accent for innovation and energy
 * - Clean typography with Poppins for headers and Inter for body
 * - Asymmetric layouts with purposeful whitespace
 * - Smooth animations and subtle depth effects
 * - Dark blue cityscape background inspired by leaftech.co.th
 */

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-primary backdrop-blur-sm border-b border-primary/80">
        <div className="container flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <img src="/images/leaftech-logo-transparent.gif" alt="Leaftech" className="h-10 w-auto" />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#solutions" className="text-white/90 hover:text-white transition-colors">
              Solutions
            </a>
            <a href="#features" className="text-white/90 hover:text-white transition-colors">
              Features
            </a>
            <a href="#contact" className="text-white/90 hover:text-white transition-colors">
              Contact
            </a>
          </div>
          <Button className="bg-accent hover:bg-accent/90 text-white">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section - Full Screen with Leaftech Cityscape Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background - Leaftech Cityscape from original website */}
        <div className="absolute inset-0">
          <img
            src="/images/leaftech-cityscape-bg.webp"
            alt="Leaftech Smart City IoT Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-primary/20"></div>
        </div>

        <div className="container relative z-10 text-center py-20">
          <div
            className={`transition-all duration-1000 max-w-4xl mx-auto ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Smart Technology for Industrial Excellence
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed drop-shadow max-w-3xl mx-auto">
              Empower your operations with IoT, SCADA, and AI Vision solutions. Detect anomalies,
              recognize patterns, and optimize processes in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-accent hover:bg-accent/90 text-white px-10 py-6 text-lg shadow-lg">
                Explore Solutions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-10 py-6 text-lg"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Secondary Hero - IoT Network Showcase */}
      <section className="relative py-20 bg-gradient-to-b from-primary to-primary/90 overflow-hidden">
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Connected Intelligence
              </h2>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Our IoT solutions connect devices, sensors, and systems across your facility,
                enabling real-time monitoring and intelligent automation.
              </p>
              <ul className="space-y-4 text-white/90">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  AI Data Chat & Automated Reporting
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  Device Management & Monitoring
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  Notibox Platform – State Machine Visualization
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  Real-time Analytics & Predictive Insights
                </li>
              </ul>
            </div>

            {/* Right Image */}
            <div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl blur-xl"></div>
                <img
                  src="/images/connected-intelligentce.png"
                  alt="IoT Network"
                  className="relative rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Solutions
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Comprehensive technology stack designed for modern industrial operations with 30+ years of SCADA expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* IoT Solution */}
            <div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border hover:border-accent/50">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                <Radio className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-bold text-primary mb-3">IoT Solutions</h3>
              <p className="text-foreground/70 mb-6">
                Connect and monitor devices across your facility using industry-standard protocols. Real-time data collection,
                edge computing, and cloud integration for seamless operations.
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Device Management & Monitoring
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Modbus, MQTT, LoRaWAN, Zigbee
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Real-time Data Analytics
                </li>
              </ul>
            </div>

            {/* SCADA Solution */}
            <div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border hover:border-accent/50 md:translate-y-4">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                <Cpu className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-bold text-primary mb-3">SCADA & Notibox</h3>
              <p className="text-foreground/70 mb-6">
                Advanced supervisory control with Notibox State Machine Platform. Visualize complex system workflows,
                monitor and control industrial processes with precision.
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  State Machine Visualization
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Alarm & Monitoring Systems
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Real-time HMI Dashboards
                </li>
              </ul>
            </div>

            {/* AI Vision Solution */}
            <div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border hover:border-accent/50">
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <Eye className="w-7 h-7 text-accent group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-bold text-primary mb-3">AI Vision</h3>
              <p className="text-foreground/70 mb-6">
                Intelligent visual inspection and recognition powered by advanced deep learning. Detect defects, recognize faces,
                and identify license plates with industry-leading accuracy.
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Quality Control & Defect Detection
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Facial Recognition & Access Control
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  License Plate Recognition (OCR)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Custom Deep Learning Models
                </li>
              </ul>
            </div>

            {/* AI Data Chat Solution */}
            <div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border hover:border-accent/50">
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <MessageSquare className="w-7 h-7 text-accent group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-bold text-primary mb-3">AI Data Chat</h3>
              <p className="text-foreground/70 mb-6">
                Intelligent chat interface for analyzing IoT data through natural language. Ask questions, get insights, and generate automated reports with visualizations.
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Natural Language Analytics
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Automated Report Generation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Visual Data Insights
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Trend Analysis & Comparison
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img
                src="/images/advance-ai.png"
                alt="AI Vision Detection"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
                Advanced AI Vision Capabilities
              </h2>
              <p className="text-lg text-foreground/70 mb-8">
                Our AI Vision technology delivers industry-leading accuracy in detecting defects,
                recognizing faces, and identifying license plates.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Defect Detection</h4>
                    <p className="text-foreground/70">Identify surface cracks, scratches, and anomalies in manufacturing</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Face Recognition</h4>
                    <p className="text-foreground/70">Secure access control and identity verification systems</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">License Plate Recognition</h4>
                    <p className="text-foreground/70">Automated vehicle identification and parking management</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
                Real-time SCADA Control
              </h2>
              <p className="text-lg text-foreground/70 mb-8">
                Monitor and control your industrial processes with our intuitive SCADA dashboards.
                Get real-time insights and make data-driven decisions.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Real-time Dashboards</h4>
                    <p className="text-foreground/70">Visualize all your operations at a glance</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Predictive Alerts</h4>
                    <p className="text-foreground/70">Get notified before issues occur</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Historical Analysis</h4>
                    <p className="text-foreground/70">Analyze trends and optimize performance</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/images/realtime-scada.png"
                alt="SCADA Control System"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Notibox Highlight Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-12 border border-accent/20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
                  Notibox Platform
                </h2>
                <p className="text-lg text-foreground/70 mb-8">
                  State Machine visualization platform that transforms complex system workflows into clear, manageable diagrams. Perfect for IoT, SCADA, Alarm & Monitoring, Data Centers, and Software Development.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Visualize Complexity</h4>
                      <p className="text-foreground/70">Transform intricate system logic into intuitive State Machine diagrams</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Streamline Development</h4>
                      <p className="text-foreground/70">Accelerate system design and troubleshooting with visual workflows</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Expert Support</h4>
                      <p className="text-foreground/70">Backed by 30+ years of SCADA expertise and dedicated consulting</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="/images/notibox-platform.png"
                  alt="Notibox Platform"
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Highlight */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-accent/5 to-accent/10">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
              Advanced AI Services
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Comprehensive AI Vision solutions tailored for industrial automation and quality control
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-accent/20 hover:border-accent/50 transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary mb-3">Defect Detection</h3>
              <p className="text-foreground/70 mb-4">Identify surface cracks, scratches, and anomalies in real-time manufacturing processes with high precision.</p>
              <p className="text-sm text-accent font-semibold">→ Reduce quality issues by up to 95%</p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-accent/20 hover:border-accent/50 transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Radio className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary mb-3">Face Recognition</h3>
              <p className="text-foreground/70 mb-4">Secure access control and identity verification with advanced facial recognition technology.</p>
              <p className="text-sm text-accent font-semibold">→ 99.9% accuracy rate</p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-accent/20 hover:border-accent/50 transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary mb-3">License Plate Recognition</h3>
              <p className="text-foreground/70 mb-4">Automated vehicle identification and parking management with real-time OCR processing.</p>
              <p className="text-sm text-accent font-semibold">→ Process 100+ vehicles/minute</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies - Real Projects Section */}
      <section id="case-studies" className="py-20 md:py-32 bg-gradient-to-b from-background to-primary/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
              ตัวอย่างผลงาน
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              โซลูชัน AI และ IoT ที่พัฒนาสำหรับลูกค้าในภาคอุตสาหกรรม
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Case Study 1: AI สำหรับโรงงานอัจฉริยะ */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-border hover:border-accent/50 transition-all hover:shadow-xl group">
              <div className="relative overflow-hidden">
                <img
                  src="/images/ai-smart-factory.webp"
                  alt="AI สำหรับโรงงานอัจฉริยะ"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                  AI + IoT/SCADA
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-primary mb-3">
                  ระบบ AI สำหรับโรงงานอัจฉริยะ
                </h3>
                <p className="text-foreground/70 mb-4 text-sm leading-relaxed">
                  พัฒนาทั้ง Solution หรือเฉพาะงานเทรน Model AI คุณภาพสูงที่สามารถตอบโจทย์เฉพาะของลูกค้าได้
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">Object Detection</span>
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">Counting</span>
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">Gauge Reading</span>
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">Defect Inspection</span>
                </div>
                <div className="text-accent font-semibold text-sm">
                  ราคาเริ่มต้น 30,000 บาท
                </div>
              </div>
            </div>

            {/* Case Study 2: AI สำหรับงานตรวจจับ */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-border hover:border-accent/50 transition-all hover:shadow-xl group">
              <div className="relative overflow-hidden">
                <img
                  src="/images/ai-vision-detection.webp"
                  alt="AI สำหรับงานตรวจจับ"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                  Vision AI
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-primary mb-3">
                  AI สำหรับงานตรวจจับ
                </h3>
                <p className="text-foreground/70 mb-4 text-sm leading-relaxed">
                  พัฒนาระบบ AI สำหรับงานตรวจจับเพื่อ Integrate เข้ากับระบบควบคุมต่างๆ ทั้งระบบหรือเฉพาะเทรน Model AI
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">Industrial Object Detection</span>
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">Worker Safety</span>
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">Face Identity</span>
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">PPE Detection</span>
                </div>
                <div className="text-accent font-semibold text-sm">
                  Emergency Machine Stop & Real-time Monitoring
                </div>
              </div>
            </div>

            {/* Case Study 3: AI อ่านค่ามิเตอร์ */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-border hover:border-accent/50 transition-all hover:shadow-xl group">
              <div className="relative overflow-hidden">
                <img
                  src="/images/ai-meter-reading-full-correct.png"
                  alt="AI อ่านค่ามิเตอร์แบบเข็ม"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                  AI Gauge Reading
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-primary mb-3">
                  AI อ่านค่ามิเตอร์แบบเข็ม
                </h3>
                <p className="text-foreground/70 mb-4 text-sm leading-relaxed">
                  ระบบ AI ตรวจจับตำแหน่งเข็ม จุดหมุน Min/Max ของ Gauge พร้อมคำนวณ Value และ Calibration อัตโนมัติ
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">Analog Gauge</span>
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">Auto Calibration</span>
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">Multi-Gauge Support</span>
                </div>
                <div className="text-accent font-semibold text-sm">
                  รองรับ Gauge หลายแบบ พร้อมระบบ Calibration
                </div>
              </div>
            </div>

            {/* Case Study 4: Notibox State Machine */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-border hover:border-accent/50 transition-all hover:shadow-xl group">
              <div className="relative overflow-hidden">
                <img
                  src="/images/notibox-state-machine-correct.png"
                  alt="Notibox State Machine"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                  Notibox Platform
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-primary mb-3">
                  Notibox : State Machine
                </h3>
                <p className="text-foreground/70 mb-4 text-sm leading-relaxed">
                  Platform ที่ประกอบไปด้วย User Authentication, Log Management, SMS Controller, Notification Filters และ State Machine Logic Controller
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">State Machine</span>
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">Alarm & Notification</span>
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">Line Noti</span>
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">SMS</span>
                </div>
                <div className="text-accent font-semibold text-sm">
                  รับวิเคราะห์ ออกแบบระบบ พัฒนา HMI & Dashboard
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32 bg-primary/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
              Why Choose Leaftech
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              30+ years of SCADA expertise combined with cutting-edge IoT and AI Vision technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 border border-border hover:border-accent/50 transition-colors">
              <Zap className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-semibold text-primary mb-2">High Performance</h3>
              <p className="text-sm text-foreground/70">Lightning-fast processing with industry-standard protocols (Modbus, MQTT, LoRaWAN)</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-border hover:border-accent/50 transition-colors">
              <Shield className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-semibold text-primary mb-2">Proven Expertise</h3>
              <p className="text-sm text-foreground/70">30+ years of SCADA experience with expert consulting</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-border hover:border-accent/50 transition-colors">
              <BarChart3 className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-semibold text-primary mb-2">End-to-End Service</h3>
              <p className="text-sm text-foreground/70">Analysis, design, hardware supply, installation & support</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-border hover:border-accent/50 transition-colors">
              <Cpu className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-semibold text-primary mb-2">Integrated Solutions</h3>
              <p className="text-sm text-foreground/70">IoT, SCADA, AI Vision & Notibox all working seamlessly</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-primary to-primary/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/images/leaftech-pattern.png"
            alt="Pattern"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Get in touch with our team to discuss how Leaftech can help your business thrive
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-base font-semibold">
                Schedule a Demo
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-6 text-base font-semibold"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">L</span>
                </div>
                <span className="font-display font-bold text-lg text-primary">Leaftech</span>
              </div>
              <p className="text-sm text-foreground/70">
                Innovative IoT, SCADA, and AI Vision solutions for modern industry
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-4">Solutions</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#" className="hover:text-primary transition-colors">IoT Solutions</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">SCADA Systems</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">AI Vision</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>Email: tharayuth@leaftech.co.th</li>
                <li>Phone: 0990515359</li>
                <li>Bangkok, Thailand</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
            <p>&copy; 2024 Leaftech Co., Ltd. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="tel:0990515359" className="hover:text-primary transition-colors">0990515359</a>
              <a href="mailto:tharayuth@leaftech.co.th" className="hover:text-primary transition-colors">tharayuth@leaftech.co.th</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
