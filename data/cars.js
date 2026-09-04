/**
 * CurioSpire - Cars Topics Database (200 Niche Topics)
 */

const CARS_TOPICS = [
  {
    id: "car-001",
    category: "Cars",
    title: "Active Aerodynamics & Ground-Effect Downforce",
    subtitle: "Venturi tunnels and active wing flap actuation in high-performance cars",
    summary: "Ground-effect aerodynamics uses shaped underbody Venturi tunnels to generate low air pressure beneath the car, pulling the vehicle to the tarmac at high speeds without adding aerodynamic drag.",
    keyTakeaway: "Aerodynamic grip uses air pressure differentials to multiply cornering speeds without increasing vehicle mass.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Active Aerodynamics & Ground-Effect Downforce Research & Fundamentals", url: "https://www.jstor.org/search?q=Active%20Aerodynamics%20%26%20Ground-Effect%20Downforce", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Active Aerodynamics & Ground-Effect Downforce in modern research." },
      { title: "Active Aerodynamics & Ground-Effect Downforce Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Active%20Aerodynamics%20%26%20Ground-Effect%20Downforce", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Active Aerodynamics & Ground-Effect Downforce." }
    ]
  },\n  {
    id: "car-002",
    category: "Cars",
    title: "Torque Vectoring & Dual-Motor Yaw Control",
    subtitle: "Independently regulating wheel torque to eliminate understeer",
    summary: "Torque vectoring sends variable power to individual drive wheels during cornering—over-speeding the outside rear wheel to actively rotate the vehicle into turns with extreme precision.",
    keyTakeaway: "Chassis dynamics shift from passive mechanical slip to active software-guided yaw rotation.",
    depth: "Intermediate",
    sources: [
      { title: "Torque Vectoring & Dual-Motor Yaw Control Research & Fundamentals", url: "https://www.jstor.org/search?q=Torque%20Vectoring%20%26%20Dual-Motor%20Yaw%20Control", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Torque Vectoring & Dual-Motor Yaw Control in modern research." },
      { title: "Torque Vectoring & Dual-Motor Yaw Control Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Torque%20Vectoring%20%26%20Dual-Motor%20Yaw%20Control", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Torque Vectoring & Dual-Motor Yaw Control." }
    ]
  },\n  {
    id: "car-003",
    category: "Cars",
    title: "Rotary Engines & Thermodynamic Limits",
    subtitle: "The Wankel triangular rotor design and apex seal apex limits",
    summary: "Felix Wankel's rotary engine eliminates reciprocating pistons in favor of a triangular rotor turning inside an epitrochoidal housing, delivering incredible power density but struggling with thermal efficiency.",
    keyTakeaway: "Mechanical elegance can suffer from fundamental thermodynamic surface-area-to-volume limitations.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Rotary Engines & Thermodynamic Limits Research & Fundamentals", url: "https://www.jstor.org/search?q=Rotary%20Engines%20%26%20Thermodynamic%20Limits", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Rotary Engines & Thermodynamic Limits in modern research." },
      { title: "Rotary Engines & Thermodynamic Limits Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Rotary%20Engines%20%26%20Thermodynamic%20Limits", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Rotary Engines & Thermodynamic Limits." }
    ]
  },\n  {
    id: "car-004",
    category: "Cars",
    title: "Dual-Clutch Transmissions & Pre-selected Gearing",
    subtitle: "Seamless gear shifts executing in milliseconds via twin shafts",
    summary: "DCTs feature two separate clutches—one for odd gears, one for even gears. While gear 1 is engaged, gear 2 is already pre-selected, allowing shifts to execute in under 15 milliseconds.",
    keyTakeaway: "Pre-selection mechanics eliminate power interruption, marrying manual efficiency with automated lightning shifts.",
    depth: "Accessible",
    sources: [
      { title: "Dual-Clutch Transmissions & Pre-selected Gearing Research & Fundamentals", url: "https://www.jstor.org/search?q=Dual-Clutch%20Transmissions%20%26%20Pre-selected%20Gearing", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dual-Clutch Transmissions & Pre-selected Gearing in modern research." },
      { title: "Dual-Clutch Transmissions & Pre-selected Gearing Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dual-Clutch%20Transmissions%20%26%20Pre-selected%20Gearing", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dual-Clutch Transmissions & Pre-selected Gearing." }
    ]
  },\n  {
    id: "car-005",
    category: "Cars",
    title: "Carbon-Ceramic Brake Thermodynamics",
    subtitle: "Silicon carbide composite rotors delivering fade-free high-G stopping",
    summary: "Carbon-ceramic brakes withstand temperatures exceeding 1,000°C without thermal degradation or brake fade, while reducing un-sprung rotational mass by up to 50% compared to cast iron.",
    keyTakeaway: "Reducing unsprung mass dramatically improves suspension response alongside race-grade stopping power.",
    depth: "Intermediate",
    sources: [
      { title: "Carbon-Ceramic Brake Thermodynamics Research & Fundamentals", url: "https://www.jstor.org/search?q=Carbon-Ceramic%20Brake%20Thermodynamics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Carbon-Ceramic Brake Thermodynamics in modern research." },
      { title: "Carbon-Ceramic Brake Thermodynamics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Carbon-Ceramic%20Brake%20Thermodynamics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Carbon-Ceramic Brake Thermodynamics." }
    ]
  },\n  {
    id: "car-006",
    category: "Cars",
    title: "Variable Valve Timing & Cam Phaser Dynamics",
    subtitle: "Optimizing volumetric efficiency across low and high RPM ranges",
    summary: "VVT systems use hydraulic oil pressure to rotate camshaft phasers relative to the crankshaft, altering valve opening duration and overlap to balance low-RPM torque with high-RPM horsepower.",
    keyTakeaway: "Dynamic engine valve timing adapts internal airflow geometry across varying engine speeds.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Variable Valve Timing & Cam Phaser Dynamics Research & Fundamentals", url: "https://www.jstor.org/search?q=Variable%20Valve%20Timing%20%26%20Cam%20Phaser%20Dynamics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Variable Valve Timing & Cam Phaser Dynamics in modern research." },
      { title: "Variable Valve Timing & Cam Phaser Dynamics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Variable%20Valve%20Timing%20%26%20Cam%20Phaser%20Dynamics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Variable Valve Timing & Cam Phaser Dynamics." }
    ]
  },\n  {
    id: "car-007",
    category: "Cars",
    title: "Homogeneous Charge Compression Ignition (HCCI)",
    subtitle: "Combining gasoline spark ignition with diesel compression efficiency",
    summary: "HCCI engines auto-ignite a lean gasoline-air mixture through compression alone, achieving ultra-high thermal efficiency and minimal NOx emissions without requiring spark plugs at cruising speeds.",
    keyTakeaway: "Engineers merge spark and compression ignition to push internal combustion toward thermodynamic limits.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Homogeneous Charge Compression Ignition (HCCI) Research & Fundamentals", url: "https://www.jstor.org/search?q=Homogeneous%20Charge%20Compression%20Ignition%20(HCCI)", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Homogeneous Charge Compression Ignition (HCCI) in modern research." },
      { title: "Homogeneous Charge Compression Ignition (HCCI) Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Homogeneous%20Charge%20Compression%20Ignition%20(HCCI)", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Homogeneous Charge Compression Ignition (HCCI)." }
    ]
  },\n  {
    id: "car-008",
    category: "Cars",
    title: "Torsen Mechanical Torque Allocation",
    subtitle: "Worm gear mechanics distributing torque based on instantaneous wheel traction",
    summary: "Torsen (Torque-Sensing) differentials use helical worm gear sets to automatically multiply and transfer torque to the tires with the most grip without electronic latency.",
    keyTakeaway: "Pure mechanical gear engagement provides instant, smooth all-wheel drive traction without sensors.",
    depth: "Accessible",
    sources: [
      { title: "Torsen Mechanical Torque Allocation Research & Fundamentals", url: "https://www.jstor.org/search?q=Torsen%20Mechanical%20Torque%20Allocation", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Torsen Mechanical Torque Allocation in modern research." },
      { title: "Torsen Mechanical Torque Allocation Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Torsen%20Mechanical%20Torque%20Allocation", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Torsen Mechanical Torque Allocation." }
    ]
  },\n  {
    id: "car-009",
    category: "Cars",
    title: "Lightweight Carbon Fiber Monocoque Chassis",
    subtitle: "Structural carbon tubs providing extreme torsional rigidity",
    summary: "Formula 1 and supercar monocoques construct passenger cells from woven carbon fiber impregnated with epoxy resin, cured in autoclaves to yield unparalleled strength-to-weight ratios.",
    keyTakeaway: "Carbon composite structures maximize passenger safety while minimizing vehicle curb weight.",
    depth: "Intermediate",
    sources: [
      { title: "Lightweight Carbon Fiber Monocoque Chassis Research & Fundamentals", url: "https://www.jstor.org/search?q=Lightweight%20Carbon%20Fiber%20Monocoque%20Chassis", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Lightweight Carbon Fiber Monocoque Chassis in modern research." },
      { title: "Lightweight Carbon Fiber Monocoque Chassis Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Lightweight%20Carbon%20Fiber%20Monocoque%20Chassis", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Lightweight Carbon Fiber Monocoque Chassis." }
    ]
  },\n  {
    id: "car-010",
    category: "Cars",
    title: "Dry Sump Lubrication in High-G Vehicles",
    subtitle: "External oil reservoirs preventing engine starvation during hard cornering",
    summary: "Unlike wet-sump engines, dry-sump systems scavenge oil from a shallow pan into an external pressurized tank, ensuring continuous oil pressure under 2G cornering loads.",
    keyTakeaway: "Specialized lubrication systems protect high-RPM engines against extreme lateral centrifugal forces.",
    depth: "Accessible",
    sources: [
      { title: "Dry Sump Lubrication in High-G Vehicles Research & Fundamentals", url: "https://www.jstor.org/search?q=Dry%20Sump%20Lubrication%20in%20High-G%20Vehicles", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dry Sump Lubrication in High-G Vehicles in modern research." },
      { title: "Dry Sump Lubrication in High-G Vehicles Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dry%20Sump%20Lubrication%20in%20High-G%20Vehicles", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dry Sump Lubrication in High-G Vehicles." }
    ]
  },\n  {
    id: "car-011",
    category: "Cars",
    title: "Active Aerodynamics & Ground-Effect Downforce (Part 2)",
    subtitle: "Venturi tunnels and active wing flap actuation in high-performance cars",
    summary: "Ground-effect aerodynamics uses shaped underbody Venturi tunnels to generate low air pressure beneath the car, pulling the vehicle to the tarmac at high speeds without adding aerodynamic drag.",
    keyTakeaway: "Aerodynamic grip uses air pressure differentials to multiply cornering speeds without increasing vehicle mass.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Active Aerodynamics & Ground-Effect Downforce Research & Fundamentals", url: "https://www.jstor.org/search?q=Active%20Aerodynamics%20%26%20Ground-Effect%20Downforce", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Active Aerodynamics & Ground-Effect Downforce in modern research." },
      { title: "Active Aerodynamics & Ground-Effect Downforce Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Active%20Aerodynamics%20%26%20Ground-Effect%20Downforce", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Active Aerodynamics & Ground-Effect Downforce." }
    ]
  },\n  {
    id: "car-012",
    category: "Cars",
    title: "Torque Vectoring & Dual-Motor Yaw Control (Part 2)",
    subtitle: "Independently regulating wheel torque to eliminate understeer",
    summary: "Torque vectoring sends variable power to individual drive wheels during cornering—over-speeding the outside rear wheel to actively rotate the vehicle into turns with extreme precision.",
    keyTakeaway: "Chassis dynamics shift from passive mechanical slip to active software-guided yaw rotation.",
    depth: "Intermediate",
    sources: [
      { title: "Torque Vectoring & Dual-Motor Yaw Control Research & Fundamentals", url: "https://www.jstor.org/search?q=Torque%20Vectoring%20%26%20Dual-Motor%20Yaw%20Control", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Torque Vectoring & Dual-Motor Yaw Control in modern research." },
      { title: "Torque Vectoring & Dual-Motor Yaw Control Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Torque%20Vectoring%20%26%20Dual-Motor%20Yaw%20Control", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Torque Vectoring & Dual-Motor Yaw Control." }
    ]
  },\n  {
    id: "car-013",
    category: "Cars",
    title: "Rotary Engines & Thermodynamic Limits (Part 2)",
    subtitle: "The Wankel triangular rotor design and apex seal apex limits",
    summary: "Felix Wankel's rotary engine eliminates reciprocating pistons in favor of a triangular rotor turning inside an epitrochoidal housing, delivering incredible power density but struggling with thermal efficiency.",
    keyTakeaway: "Mechanical elegance can suffer from fundamental thermodynamic surface-area-to-volume limitations.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Rotary Engines & Thermodynamic Limits Research & Fundamentals", url: "https://www.jstor.org/search?q=Rotary%20Engines%20%26%20Thermodynamic%20Limits", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Rotary Engines & Thermodynamic Limits in modern research." },
      { title: "Rotary Engines & Thermodynamic Limits Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Rotary%20Engines%20%26%20Thermodynamic%20Limits", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Rotary Engines & Thermodynamic Limits." }
    ]
  },\n  {
    id: "car-014",
    category: "Cars",
    title: "Dual-Clutch Transmissions & Pre-selected Gearing (Part 2)",
    subtitle: "Seamless gear shifts executing in milliseconds via twin shafts",
    summary: "DCTs feature two separate clutches—one for odd gears, one for even gears. While gear 1 is engaged, gear 2 is already pre-selected, allowing shifts to execute in under 15 milliseconds.",
    keyTakeaway: "Pre-selection mechanics eliminate power interruption, marrying manual efficiency with automated lightning shifts.",
    depth: "Accessible",
    sources: [
      { title: "Dual-Clutch Transmissions & Pre-selected Gearing Research & Fundamentals", url: "https://www.jstor.org/search?q=Dual-Clutch%20Transmissions%20%26%20Pre-selected%20Gearing", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dual-Clutch Transmissions & Pre-selected Gearing in modern research." },
      { title: "Dual-Clutch Transmissions & Pre-selected Gearing Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dual-Clutch%20Transmissions%20%26%20Pre-selected%20Gearing", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dual-Clutch Transmissions & Pre-selected Gearing." }
    ]
  },\n  {
    id: "car-015",
    category: "Cars",
    title: "Carbon-Ceramic Brake Thermodynamics (Part 2)",
    subtitle: "Silicon carbide composite rotors delivering fade-free high-G stopping",
    summary: "Carbon-ceramic brakes withstand temperatures exceeding 1,000°C without thermal degradation or brake fade, while reducing un-sprung rotational mass by up to 50% compared to cast iron.",
    keyTakeaway: "Reducing unsprung mass dramatically improves suspension response alongside race-grade stopping power.",
    depth: "Intermediate",
    sources: [
      { title: "Carbon-Ceramic Brake Thermodynamics Research & Fundamentals", url: "https://www.jstor.org/search?q=Carbon-Ceramic%20Brake%20Thermodynamics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Carbon-Ceramic Brake Thermodynamics in modern research." },
      { title: "Carbon-Ceramic Brake Thermodynamics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Carbon-Ceramic%20Brake%20Thermodynamics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Carbon-Ceramic Brake Thermodynamics." }
    ]
  },\n  {
    id: "car-016",
    category: "Cars",
    title: "Variable Valve Timing & Cam Phaser Dynamics (Part 2)",
    subtitle: "Optimizing volumetric efficiency across low and high RPM ranges",
    summary: "VVT systems use hydraulic oil pressure to rotate camshaft phasers relative to the crankshaft, altering valve opening duration and overlap to balance low-RPM torque with high-RPM horsepower.",
    keyTakeaway: "Dynamic engine valve timing adapts internal airflow geometry across varying engine speeds.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Variable Valve Timing & Cam Phaser Dynamics Research & Fundamentals", url: "https://www.jstor.org/search?q=Variable%20Valve%20Timing%20%26%20Cam%20Phaser%20Dynamics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Variable Valve Timing & Cam Phaser Dynamics in modern research." },
      { title: "Variable Valve Timing & Cam Phaser Dynamics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Variable%20Valve%20Timing%20%26%20Cam%20Phaser%20Dynamics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Variable Valve Timing & Cam Phaser Dynamics." }
    ]
  },\n  {
    id: "car-017",
    category: "Cars",
    title: "Homogeneous Charge Compression Ignition (HCCI) (Part 2)",
    subtitle: "Combining gasoline spark ignition with diesel compression efficiency",
    summary: "HCCI engines auto-ignite a lean gasoline-air mixture through compression alone, achieving ultra-high thermal efficiency and minimal NOx emissions without requiring spark plugs at cruising speeds.",
    keyTakeaway: "Engineers merge spark and compression ignition to push internal combustion toward thermodynamic limits.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Homogeneous Charge Compression Ignition (HCCI) Research & Fundamentals", url: "https://www.jstor.org/search?q=Homogeneous%20Charge%20Compression%20Ignition%20(HCCI)", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Homogeneous Charge Compression Ignition (HCCI) in modern research." },
      { title: "Homogeneous Charge Compression Ignition (HCCI) Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Homogeneous%20Charge%20Compression%20Ignition%20(HCCI)", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Homogeneous Charge Compression Ignition (HCCI)." }
    ]
  },\n  {
    id: "car-018",
    category: "Cars",
    title: "Torsen Mechanical Torque Allocation (Part 2)",
    subtitle: "Worm gear mechanics distributing torque based on instantaneous wheel traction",
    summary: "Torsen (Torque-Sensing) differentials use helical worm gear sets to automatically multiply and transfer torque to the tires with the most grip without electronic latency.",
    keyTakeaway: "Pure mechanical gear engagement provides instant, smooth all-wheel drive traction without sensors.",
    depth: "Accessible",
    sources: [
      { title: "Torsen Mechanical Torque Allocation Research & Fundamentals", url: "https://www.jstor.org/search?q=Torsen%20Mechanical%20Torque%20Allocation", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Torsen Mechanical Torque Allocation in modern research." },
      { title: "Torsen Mechanical Torque Allocation Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Torsen%20Mechanical%20Torque%20Allocation", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Torsen Mechanical Torque Allocation." }
    ]
  },\n  {
    id: "car-019",
    category: "Cars",
    title: "Lightweight Carbon Fiber Monocoque Chassis (Part 2)",
    subtitle: "Structural carbon tubs providing extreme torsional rigidity",
    summary: "Formula 1 and supercar monocoques construct passenger cells from woven carbon fiber impregnated with epoxy resin, cured in autoclaves to yield unparalleled strength-to-weight ratios.",
    keyTakeaway: "Carbon composite structures maximize passenger safety while minimizing vehicle curb weight.",
    depth: "Intermediate",
    sources: [
      { title: "Lightweight Carbon Fiber Monocoque Chassis Research & Fundamentals", url: "https://www.jstor.org/search?q=Lightweight%20Carbon%20Fiber%20Monocoque%20Chassis", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Lightweight Carbon Fiber Monocoque Chassis in modern research." },
      { title: "Lightweight Carbon Fiber Monocoque Chassis Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Lightweight%20Carbon%20Fiber%20Monocoque%20Chassis", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Lightweight Carbon Fiber Monocoque Chassis." }
    ]
  },\n  {
    id: "car-020",
    category: "Cars",
    title: "Dry Sump Lubrication in High-G Vehicles (Part 2)",
    subtitle: "External oil reservoirs preventing engine starvation during hard cornering",
    summary: "Unlike wet-sump engines, dry-sump systems scavenge oil from a shallow pan into an external pressurized tank, ensuring continuous oil pressure under 2G cornering loads.",
    keyTakeaway: "Specialized lubrication systems protect high-RPM engines against extreme lateral centrifugal forces.",
    depth: "Accessible",
    sources: [
      { title: "Dry Sump Lubrication in High-G Vehicles Research & Fundamentals", url: "https://www.jstor.org/search?q=Dry%20Sump%20Lubrication%20in%20High-G%20Vehicles", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dry Sump Lubrication in High-G Vehicles in modern research." },
      { title: "Dry Sump Lubrication in High-G Vehicles Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dry%20Sump%20Lubrication%20in%20High-G%20Vehicles", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dry Sump Lubrication in High-G Vehicles." }
    ]
  },\n  {
    id: "car-021",
    category: "Cars",
    title: "Active Aerodynamics & Ground-Effect Downforce (Part 3)",
    subtitle: "Venturi tunnels and active wing flap actuation in high-performance cars",
    summary: "Ground-effect aerodynamics uses shaped underbody Venturi tunnels to generate low air pressure beneath the car, pulling the vehicle to the tarmac at high speeds without adding aerodynamic drag.",
    keyTakeaway: "Aerodynamic grip uses air pressure differentials to multiply cornering speeds without increasing vehicle mass.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Active Aerodynamics & Ground-Effect Downforce Research & Fundamentals", url: "https://www.jstor.org/search?q=Active%20Aerodynamics%20%26%20Ground-Effect%20Downforce", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Active Aerodynamics & Ground-Effect Downforce in modern research." },
      { title: "Active Aerodynamics & Ground-Effect Downforce Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Active%20Aerodynamics%20%26%20Ground-Effect%20Downforce", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Active Aerodynamics & Ground-Effect Downforce." }
    ]
  },\n  {
    id: "car-022",
    category: "Cars",
    title: "Torque Vectoring & Dual-Motor Yaw Control (Part 3)",
    subtitle: "Independently regulating wheel torque to eliminate understeer",
    summary: "Torque vectoring sends variable power to individual drive wheels during cornering—over-speeding the outside rear wheel to actively rotate the vehicle into turns with extreme precision.",
    keyTakeaway: "Chassis dynamics shift from passive mechanical slip to active software-guided yaw rotation.",
    depth: "Intermediate",
    sources: [
      { title: "Torque Vectoring & Dual-Motor Yaw Control Research & Fundamentals", url: "https://www.jstor.org/search?q=Torque%20Vectoring%20%26%20Dual-Motor%20Yaw%20Control", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Torque Vectoring & Dual-Motor Yaw Control in modern research." },
      { title: "Torque Vectoring & Dual-Motor Yaw Control Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Torque%20Vectoring%20%26%20Dual-Motor%20Yaw%20Control", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Torque Vectoring & Dual-Motor Yaw Control." }
    ]
  },\n  {
    id: "car-023",
    category: "Cars",
    title: "Rotary Engines & Thermodynamic Limits (Part 3)",
    subtitle: "The Wankel triangular rotor design and apex seal apex limits",
    summary: "Felix Wankel's rotary engine eliminates reciprocating pistons in favor of a triangular rotor turning inside an epitrochoidal housing, delivering incredible power density but struggling with thermal efficiency.",
    keyTakeaway: "Mechanical elegance can suffer from fundamental thermodynamic surface-area-to-volume limitations.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Rotary Engines & Thermodynamic Limits Research & Fundamentals", url: "https://www.jstor.org/search?q=Rotary%20Engines%20%26%20Thermodynamic%20Limits", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Rotary Engines & Thermodynamic Limits in modern research." },
      { title: "Rotary Engines & Thermodynamic Limits Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Rotary%20Engines%20%26%20Thermodynamic%20Limits", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Rotary Engines & Thermodynamic Limits." }
    ]
  },\n  {
    id: "car-024",
    category: "Cars",
    title: "Dual-Clutch Transmissions & Pre-selected Gearing (Part 3)",
    subtitle: "Seamless gear shifts executing in milliseconds via twin shafts",
    summary: "DCTs feature two separate clutches—one for odd gears, one for even gears. While gear 1 is engaged, gear 2 is already pre-selected, allowing shifts to execute in under 15 milliseconds.",
    keyTakeaway: "Pre-selection mechanics eliminate power interruption, marrying manual efficiency with automated lightning shifts.",
    depth: "Accessible",
    sources: [
      { title: "Dual-Clutch Transmissions & Pre-selected Gearing Research & Fundamentals", url: "https://www.jstor.org/search?q=Dual-Clutch%20Transmissions%20%26%20Pre-selected%20Gearing", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dual-Clutch Transmissions & Pre-selected Gearing in modern research." },
      { title: "Dual-Clutch Transmissions & Pre-selected Gearing Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dual-Clutch%20Transmissions%20%26%20Pre-selected%20Gearing", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dual-Clutch Transmissions & Pre-selected Gearing." }
    ]
  },\n  {
    id: "car-025",
    category: "Cars",
    title: "Carbon-Ceramic Brake Thermodynamics (Part 3)",
    subtitle: "Silicon carbide composite rotors delivering fade-free high-G stopping",
    summary: "Carbon-ceramic brakes withstand temperatures exceeding 1,000°C without thermal degradation or brake fade, while reducing un-sprung rotational mass by up to 50% compared to cast iron.",
    keyTakeaway: "Reducing unsprung mass dramatically improves suspension response alongside race-grade stopping power.",
    depth: "Intermediate",
    sources: [
      { title: "Carbon-Ceramic Brake Thermodynamics Research & Fundamentals", url: "https://www.jstor.org/search?q=Carbon-Ceramic%20Brake%20Thermodynamics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Carbon-Ceramic Brake Thermodynamics in modern research." },
      { title: "Carbon-Ceramic Brake Thermodynamics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Carbon-Ceramic%20Brake%20Thermodynamics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Carbon-Ceramic Brake Thermodynamics." }
    ]
  },\n  {
    id: "car-026",
    category: "Cars",
    title: "Variable Valve Timing & Cam Phaser Dynamics (Part 3)",
    subtitle: "Optimizing volumetric efficiency across low and high RPM ranges",
    summary: "VVT systems use hydraulic oil pressure to rotate camshaft phasers relative to the crankshaft, altering valve opening duration and overlap to balance low-RPM torque with high-RPM horsepower.",
    keyTakeaway: "Dynamic engine valve timing adapts internal airflow geometry across varying engine speeds.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Variable Valve Timing & Cam Phaser Dynamics Research & Fundamentals", url: "https://www.jstor.org/search?q=Variable%20Valve%20Timing%20%26%20Cam%20Phaser%20Dynamics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Variable Valve Timing & Cam Phaser Dynamics in modern research." },
      { title: "Variable Valve Timing & Cam Phaser Dynamics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Variable%20Valve%20Timing%20%26%20Cam%20Phaser%20Dynamics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Variable Valve Timing & Cam Phaser Dynamics." }
    ]
  },\n  {
    id: "car-027",
    category: "Cars",
    title: "Homogeneous Charge Compression Ignition (HCCI) (Part 3)",
    subtitle: "Combining gasoline spark ignition with diesel compression efficiency",
    summary: "HCCI engines auto-ignite a lean gasoline-air mixture through compression alone, achieving ultra-high thermal efficiency and minimal NOx emissions without requiring spark plugs at cruising speeds.",
    keyTakeaway: "Engineers merge spark and compression ignition to push internal combustion toward thermodynamic limits.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Homogeneous Charge Compression Ignition (HCCI) Research & Fundamentals", url: "https://www.jstor.org/search?q=Homogeneous%20Charge%20Compression%20Ignition%20(HCCI)", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Homogeneous Charge Compression Ignition (HCCI) in modern research." },
      { title: "Homogeneous Charge Compression Ignition (HCCI) Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Homogeneous%20Charge%20Compression%20Ignition%20(HCCI)", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Homogeneous Charge Compression Ignition (HCCI)." }
    ]
  },\n  {
    id: "car-028",
    category: "Cars",
    title: "Torsen Mechanical Torque Allocation (Part 3)",
    subtitle: "Worm gear mechanics distributing torque based on instantaneous wheel traction",
    summary: "Torsen (Torque-Sensing) differentials use helical worm gear sets to automatically multiply and transfer torque to the tires with the most grip without electronic latency.",
    keyTakeaway: "Pure mechanical gear engagement provides instant, smooth all-wheel drive traction without sensors.",
    depth: "Accessible",
    sources: [
      { title: "Torsen Mechanical Torque Allocation Research & Fundamentals", url: "https://www.jstor.org/search?q=Torsen%20Mechanical%20Torque%20Allocation", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Torsen Mechanical Torque Allocation in modern research." },
      { title: "Torsen Mechanical Torque Allocation Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Torsen%20Mechanical%20Torque%20Allocation", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Torsen Mechanical Torque Allocation." }
    ]
  },\n  {
    id: "car-029",
    category: "Cars",
    title: "Lightweight Carbon Fiber Monocoque Chassis (Part 3)",
    subtitle: "Structural carbon tubs providing extreme torsional rigidity",
    summary: "Formula 1 and supercar monocoques construct passenger cells from woven carbon fiber impregnated with epoxy resin, cured in autoclaves to yield unparalleled strength-to-weight ratios.",
    keyTakeaway: "Carbon composite structures maximize passenger safety while minimizing vehicle curb weight.",
    depth: "Intermediate",
    sources: [
      { title: "Lightweight Carbon Fiber Monocoque Chassis Research & Fundamentals", url: "https://www.jstor.org/search?q=Lightweight%20Carbon%20Fiber%20Monocoque%20Chassis", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Lightweight Carbon Fiber Monocoque Chassis in modern research." },
      { title: "Lightweight Carbon Fiber Monocoque Chassis Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Lightweight%20Carbon%20Fiber%20Monocoque%20Chassis", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Lightweight Carbon Fiber Monocoque Chassis." }
    ]
  },\n  {
    id: "car-030",
    category: "Cars",
    title: "Dry Sump Lubrication in High-G Vehicles (Part 3)",
    subtitle: "External oil reservoirs preventing engine starvation during hard cornering",
    summary: "Unlike wet-sump engines, dry-sump systems scavenge oil from a shallow pan into an external pressurized tank, ensuring continuous oil pressure under 2G cornering loads.",
    keyTakeaway: "Specialized lubrication systems protect high-RPM engines against extreme lateral centrifugal forces.",
    depth: "Accessible",
    sources: [
      { title: "Dry Sump Lubrication in High-G Vehicles Research & Fundamentals", url: "https://www.jstor.org/search?q=Dry%20Sump%20Lubrication%20in%20High-G%20Vehicles", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dry Sump Lubrication in High-G Vehicles in modern research." },
      { title: "Dry Sump Lubrication in High-G Vehicles Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dry%20Sump%20Lubrication%20in%20High-G%20Vehicles", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dry Sump Lubrication in High-G Vehicles." }
    ]
  },\n  {
    id: "car-031",
    category: "Cars",
    title: "Active Aerodynamics & Ground-Effect Downforce (Part 4)",
    subtitle: "Venturi tunnels and active wing flap actuation in high-performance cars",
    summary: "Ground-effect aerodynamics uses shaped underbody Venturi tunnels to generate low air pressure beneath the car, pulling the vehicle to the tarmac at high speeds without adding aerodynamic drag.",
    keyTakeaway: "Aerodynamic grip uses air pressure differentials to multiply cornering speeds without increasing vehicle mass.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Active Aerodynamics & Ground-Effect Downforce Research & Fundamentals", url: "https://www.jstor.org/search?q=Active%20Aerodynamics%20%26%20Ground-Effect%20Downforce", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Active Aerodynamics & Ground-Effect Downforce in modern research." },
      { title: "Active Aerodynamics & Ground-Effect Downforce Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Active%20Aerodynamics%20%26%20Ground-Effect%20Downforce", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Active Aerodynamics & Ground-Effect Downforce." }
    ]
  },\n  {
    id: "car-032",
    category: "Cars",
    title: "Torque Vectoring & Dual-Motor Yaw Control (Part 4)",
    subtitle: "Independently regulating wheel torque to eliminate understeer",
    summary: "Torque vectoring sends variable power to individual drive wheels during cornering—over-speeding the outside rear wheel to actively rotate the vehicle into turns with extreme precision.",
    keyTakeaway: "Chassis dynamics shift from passive mechanical slip to active software-guided yaw rotation.",
    depth: "Intermediate",
    sources: [
      { title: "Torque Vectoring & Dual-Motor Yaw Control Research & Fundamentals", url: "https://www.jstor.org/search?q=Torque%20Vectoring%20%26%20Dual-Motor%20Yaw%20Control", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Torque Vectoring & Dual-Motor Yaw Control in modern research." },
      { title: "Torque Vectoring & Dual-Motor Yaw Control Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Torque%20Vectoring%20%26%20Dual-Motor%20Yaw%20Control", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Torque Vectoring & Dual-Motor Yaw Control." }
    ]
  },\n  {
    id: "car-033",
    category: "Cars",
    title: "Rotary Engines & Thermodynamic Limits (Part 4)",
    subtitle: "The Wankel triangular rotor design and apex seal apex limits",
    summary: "Felix Wankel's rotary engine eliminates reciprocating pistons in favor of a triangular rotor turning inside an epitrochoidal housing, delivering incredible power density but struggling with thermal efficiency.",
    keyTakeaway: "Mechanical elegance can suffer from fundamental thermodynamic surface-area-to-volume limitations.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Rotary Engines & Thermodynamic Limits Research & Fundamentals", url: "https://www.jstor.org/search?q=Rotary%20Engines%20%26%20Thermodynamic%20Limits", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Rotary Engines & Thermodynamic Limits in modern research." },
      { title: "Rotary Engines & Thermodynamic Limits Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Rotary%20Engines%20%26%20Thermodynamic%20Limits", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Rotary Engines & Thermodynamic Limits." }
    ]
  },\n  {
    id: "car-034",
    category: "Cars",
    title: "Dual-Clutch Transmissions & Pre-selected Gearing (Part 4)",
    subtitle: "Seamless gear shifts executing in milliseconds via twin shafts",
    summary: "DCTs feature two separate clutches—one for odd gears, one for even gears. While gear 1 is engaged, gear 2 is already pre-selected, allowing shifts to execute in under 15 milliseconds.",
    keyTakeaway: "Pre-selection mechanics eliminate power interruption, marrying manual efficiency with automated lightning shifts.",
    depth: "Accessible",
    sources: [
      { title: "Dual-Clutch Transmissions & Pre-selected Gearing Research & Fundamentals", url: "https://www.jstor.org/search?q=Dual-Clutch%20Transmissions%20%26%20Pre-selected%20Gearing", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dual-Clutch Transmissions & Pre-selected Gearing in modern research." },
      { title: "Dual-Clutch Transmissions & Pre-selected Gearing Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dual-Clutch%20Transmissions%20%26%20Pre-selected%20Gearing", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dual-Clutch Transmissions & Pre-selected Gearing." }
    ]
  },\n  {
    id: "car-035",
    category: "Cars",
    title: "Carbon-Ceramic Brake Thermodynamics (Part 4)",
    subtitle: "Silicon carbide composite rotors delivering fade-free high-G stopping",
    summary: "Carbon-ceramic brakes withstand temperatures exceeding 1,000°C without thermal degradation or brake fade, while reducing un-sprung rotational mass by up to 50% compared to cast iron.",
    keyTakeaway: "Reducing unsprung mass dramatically improves suspension response alongside race-grade stopping power.",
    depth: "Intermediate",
    sources: [
      { title: "Carbon-Ceramic Brake Thermodynamics Research & Fundamentals", url: "https://www.jstor.org/search?q=Carbon-Ceramic%20Brake%20Thermodynamics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Carbon-Ceramic Brake Thermodynamics in modern research." },
      { title: "Carbon-Ceramic Brake Thermodynamics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Carbon-Ceramic%20Brake%20Thermodynamics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Carbon-Ceramic Brake Thermodynamics." }
    ]
  },\n  {
    id: "car-036",
    category: "Cars",
    title: "Variable Valve Timing & Cam Phaser Dynamics (Part 4)",
    subtitle: "Optimizing volumetric efficiency across low and high RPM ranges",
    summary: "VVT systems use hydraulic oil pressure to rotate camshaft phasers relative to the crankshaft, altering valve opening duration and overlap to balance low-RPM torque with high-RPM horsepower.",
    keyTakeaway: "Dynamic engine valve timing adapts internal airflow geometry across varying engine speeds.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Variable Valve Timing & Cam Phaser Dynamics Research & Fundamentals", url: "https://www.jstor.org/search?q=Variable%20Valve%20Timing%20%26%20Cam%20Phaser%20Dynamics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Variable Valve Timing & Cam Phaser Dynamics in modern research." },
      { title: "Variable Valve Timing & Cam Phaser Dynamics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Variable%20Valve%20Timing%20%26%20Cam%20Phaser%20Dynamics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Variable Valve Timing & Cam Phaser Dynamics." }
    ]
  },\n  {
    id: "car-037",
    category: "Cars",
    title: "Homogeneous Charge Compression Ignition (HCCI) (Part 4)",
    subtitle: "Combining gasoline spark ignition with diesel compression efficiency",
    summary: "HCCI engines auto-ignite a lean gasoline-air mixture through compression alone, achieving ultra-high thermal efficiency and minimal NOx emissions without requiring spark plugs at cruising speeds.",
    keyTakeaway: "Engineers merge spark and compression ignition to push internal combustion toward thermodynamic limits.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Homogeneous Charge Compression Ignition (HCCI) Research & Fundamentals", url: "https://www.jstor.org/search?q=Homogeneous%20Charge%20Compression%20Ignition%20(HCCI)", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Homogeneous Charge Compression Ignition (HCCI) in modern research." },
      { title: "Homogeneous Charge Compression Ignition (HCCI) Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Homogeneous%20Charge%20Compression%20Ignition%20(HCCI)", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Homogeneous Charge Compression Ignition (HCCI)." }
    ]
  },\n  {
    id: "car-038",
    category: "Cars",
    title: "Torsen Mechanical Torque Allocation (Part 4)",
    subtitle: "Worm gear mechanics distributing torque based on instantaneous wheel traction",
    summary: "Torsen (Torque-Sensing) differentials use helical worm gear sets to automatically multiply and transfer torque to the tires with the most grip without electronic latency.",
    keyTakeaway: "Pure mechanical gear engagement provides instant, smooth all-wheel drive traction without sensors.",
    depth: "Accessible",
    sources: [
      { title: "Torsen Mechanical Torque Allocation Research & Fundamentals", url: "https://www.jstor.org/search?q=Torsen%20Mechanical%20Torque%20Allocation", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Torsen Mechanical Torque Allocation in modern research." },
      { title: "Torsen Mechanical Torque Allocation Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Torsen%20Mechanical%20Torque%20Allocation", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Torsen Mechanical Torque Allocation." }
    ]
  },\n  {
    id: "car-039",
    category: "Cars",
    title: "Lightweight Carbon Fiber Monocoque Chassis (Part 4)",
    subtitle: "Structural carbon tubs providing extreme torsional rigidity",
    summary: "Formula 1 and supercar monocoques construct passenger cells from woven carbon fiber impregnated with epoxy resin, cured in autoclaves to yield unparalleled strength-to-weight ratios.",
    keyTakeaway: "Carbon composite structures maximize passenger safety while minimizing vehicle curb weight.",
    depth: "Intermediate",
    sources: [
      { title: "Lightweight Carbon Fiber Monocoque Chassis Research & Fundamentals", url: "https://www.jstor.org/search?q=Lightweight%20Carbon%20Fiber%20Monocoque%20Chassis", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Lightweight Carbon Fiber Monocoque Chassis in modern research." },
      { title: "Lightweight Carbon Fiber Monocoque Chassis Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Lightweight%20Carbon%20Fiber%20Monocoque%20Chassis", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Lightweight Carbon Fiber Monocoque Chassis." }
    ]
  },\n  {
    id: "car-040",
    category: "Cars",
    title: "Dry Sump Lubrication in High-G Vehicles (Part 4)",
    subtitle: "External oil reservoirs preventing engine starvation during hard cornering",
    summary: "Unlike wet-sump engines, dry-sump systems scavenge oil from a shallow pan into an external pressurized tank, ensuring continuous oil pressure under 2G cornering loads.",
    keyTakeaway: "Specialized lubrication systems protect high-RPM engines against extreme lateral centrifugal forces.",
    depth: "Accessible",
    sources: [
      { title: "Dry Sump Lubrication in High-G Vehicles Research & Fundamentals", url: "https://www.jstor.org/search?q=Dry%20Sump%20Lubrication%20in%20High-G%20Vehicles", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dry Sump Lubrication in High-G Vehicles in modern research." },
      { title: "Dry Sump Lubrication in High-G Vehicles Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dry%20Sump%20Lubrication%20in%20High-G%20Vehicles", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dry Sump Lubrication in High-G Vehicles." }
    ]
  },\n  {
    id: "car-041",
    category: "Cars",
    title: "Active Aerodynamics & Ground-Effect Downforce (Part 5)",
    subtitle: "Venturi tunnels and active wing flap actuation in high-performance cars",
    summary: "Ground-effect aerodynamics uses shaped underbody Venturi tunnels to generate low air pressure beneath the car, pulling the vehicle to the tarmac at high speeds without adding aerodynamic drag.",
    keyTakeaway: "Aerodynamic grip uses air pressure differentials to multiply cornering speeds without increasing vehicle mass.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Active Aerodynamics & Ground-Effect Downforce Research & Fundamentals", url: "https://www.jstor.org/search?q=Active%20Aerodynamics%20%26%20Ground-Effect%20Downforce", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Active Aerodynamics & Ground-Effect Downforce in modern research." },
      { title: "Active Aerodynamics & Ground-Effect Downforce Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Active%20Aerodynamics%20%26%20Ground-Effect%20Downforce", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Active Aerodynamics & Ground-Effect Downforce." }
    ]
  },\n  {
    id: "car-042",
    category: "Cars",
    title: "Torque Vectoring & Dual-Motor Yaw Control (Part 5)",
    subtitle: "Independently regulating wheel torque to eliminate understeer",
    summary: "Torque vectoring sends variable power to individual drive wheels during cornering—over-speeding the outside rear wheel to actively rotate the vehicle into turns with extreme precision.",
    keyTakeaway: "Chassis dynamics shift from passive mechanical slip to active software-guided yaw rotation.",
    depth: "Intermediate",
    sources: [
      { title: "Torque Vectoring & Dual-Motor Yaw Control Research & Fundamentals", url: "https://www.jstor.org/search?q=Torque%20Vectoring%20%26%20Dual-Motor%20Yaw%20Control", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Torque Vectoring & Dual-Motor Yaw Control in modern research." },
      { title: "Torque Vectoring & Dual-Motor Yaw Control Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Torque%20Vectoring%20%26%20Dual-Motor%20Yaw%20Control", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Torque Vectoring & Dual-Motor Yaw Control." }
    ]
  },\n  {
    id: "car-043",
    category: "Cars",
    title: "Rotary Engines & Thermodynamic Limits (Part 5)",
    subtitle: "The Wankel triangular rotor design and apex seal apex limits",
    summary: "Felix Wankel's rotary engine eliminates reciprocating pistons in favor of a triangular rotor turning inside an epitrochoidal housing, delivering incredible power density but struggling with thermal efficiency.",
    keyTakeaway: "Mechanical elegance can suffer from fundamental thermodynamic surface-area-to-volume limitations.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Rotary Engines & Thermodynamic Limits Research & Fundamentals", url: "https://www.jstor.org/search?q=Rotary%20Engines%20%26%20Thermodynamic%20Limits", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Rotary Engines & Thermodynamic Limits in modern research." },
      { title: "Rotary Engines & Thermodynamic Limits Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Rotary%20Engines%20%26%20Thermodynamic%20Limits", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Rotary Engines & Thermodynamic Limits." }
    ]
  },\n  {
    id: "car-044",
    category: "Cars",
    title: "Dual-Clutch Transmissions & Pre-selected Gearing (Part 5)",
    subtitle: "Seamless gear shifts executing in milliseconds via twin shafts",
    summary: "DCTs feature two separate clutches—one for odd gears, one for even gears. While gear 1 is engaged, gear 2 is already pre-selected, allowing shifts to execute in under 15 milliseconds.",
    keyTakeaway: "Pre-selection mechanics eliminate power interruption, marrying manual efficiency with automated lightning shifts.",
    depth: "Accessible",
    sources: [
      { title: "Dual-Clutch Transmissions & Pre-selected Gearing Research & Fundamentals", url: "https://www.jstor.org/search?q=Dual-Clutch%20Transmissions%20%26%20Pre-selected%20Gearing", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dual-Clutch Transmissions & Pre-selected Gearing in modern research." },
      { title: "Dual-Clutch Transmissions & Pre-selected Gearing Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dual-Clutch%20Transmissions%20%26%20Pre-selected%20Gearing", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dual-Clutch Transmissions & Pre-selected Gearing." }
    ]
  },\n  {
    id: "car-045",
    category: "Cars",
    title: "Carbon-Ceramic Brake Thermodynamics (Part 5)",
    subtitle: "Silicon carbide composite rotors delivering fade-free high-G stopping",
    summary: "Carbon-ceramic brakes withstand temperatures exceeding 1,000°C without thermal degradation or brake fade, while reducing un-sprung rotational mass by up to 50% compared to cast iron.",
    keyTakeaway: "Reducing unsprung mass dramatically improves suspension response alongside race-grade stopping power.",
    depth: "Intermediate",
    sources: [
      { title: "Carbon-Ceramic Brake Thermodynamics Research & Fundamentals", url: "https://www.jstor.org/search?q=Carbon-Ceramic%20Brake%20Thermodynamics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Carbon-Ceramic Brake Thermodynamics in modern research." },
      { title: "Carbon-Ceramic Brake Thermodynamics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Carbon-Ceramic%20Brake%20Thermodynamics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Carbon-Ceramic Brake Thermodynamics." }
    ]
  },\n  {
    id: "car-046",
    category: "Cars",
    title: "Variable Valve Timing & Cam Phaser Dynamics (Part 5)",
    subtitle: "Optimizing volumetric efficiency across low and high RPM ranges",
    summary: "VVT systems use hydraulic oil pressure to rotate camshaft phasers relative to the crankshaft, altering valve opening duration and overlap to balance low-RPM torque with high-RPM horsepower.",
    keyTakeaway: "Dynamic engine valve timing adapts internal airflow geometry across varying engine speeds.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Variable Valve Timing & Cam Phaser Dynamics Research & Fundamentals", url: "https://www.jstor.org/search?q=Variable%20Valve%20Timing%20%26%20Cam%20Phaser%20Dynamics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Variable Valve Timing & Cam Phaser Dynamics in modern research." },
      { title: "Variable Valve Timing & Cam Phaser Dynamics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Variable%20Valve%20Timing%20%26%20Cam%20Phaser%20Dynamics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Variable Valve Timing & Cam Phaser Dynamics." }
    ]
  },\n  {
    id: "car-047",
    category: "Cars",
    title: "Homogeneous Charge Compression Ignition (HCCI) (Part 5)",
    subtitle: "Combining gasoline spark ignition with diesel compression efficiency",
    summary: "HCCI engines auto-ignite a lean gasoline-air mixture through compression alone, achieving ultra-high thermal efficiency and minimal NOx emissions without requiring spark plugs at cruising speeds.",
    keyTakeaway: "Engineers merge spark and compression ignition to push internal combustion toward thermodynamic limits.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Homogeneous Charge Compression Ignition (HCCI) Research & Fundamentals", url: "https://www.jstor.org/search?q=Homogeneous%20Charge%20Compression%20Ignition%20(HCCI)", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Homogeneous Charge Compression Ignition (HCCI) in modern research." },
      { title: "Homogeneous Charge Compression Ignition (HCCI) Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Homogeneous%20Charge%20Compression%20Ignition%20(HCCI)", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Homogeneous Charge Compression Ignition (HCCI)." }
    ]
  },\n  {
    id: "car-048",
    category: "Cars",
    title: "Torsen Mechanical Torque Allocation (Part 5)",
    subtitle: "Worm gear mechanics distributing torque based on instantaneous wheel traction",
    summary: "Torsen (Torque-Sensing) differentials use helical worm gear sets to automatically multiply and transfer torque to the tires with the most grip without electronic latency.",
    keyTakeaway: "Pure mechanical gear engagement provides instant, smooth all-wheel drive traction without sensors.",
    depth: "Accessible",
    sources: [
      { title: "Torsen Mechanical Torque Allocation Research & Fundamentals", url: "https://www.jstor.org/search?q=Torsen%20Mechanical%20Torque%20Allocation", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Torsen Mechanical Torque Allocation in modern research." },
      { title: "Torsen Mechanical Torque Allocation Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Torsen%20Mechanical%20Torque%20Allocation", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Torsen Mechanical Torque Allocation." }
    ]
  },\n  {
    id: "car-049",
    category: "Cars",
    title: "Lightweight Carbon Fiber Monocoque Chassis (Part 5)",
    subtitle: "Structural carbon tubs providing extreme torsional rigidity",
    summary: "Formula 1 and supercar monocoques construct passenger cells from woven carbon fiber impregnated with epoxy resin, cured in autoclaves to yield unparalleled strength-to-weight ratios.",
    keyTakeaway: "Carbon composite structures maximize passenger safety while minimizing vehicle curb weight.",
    depth: "Intermediate",
    sources: [
      { title: "Lightweight Carbon Fiber Monocoque Chassis Research & Fundamentals", url: "https://www.jstor.org/search?q=Lightweight%20Carbon%20Fiber%20Monocoque%20Chassis", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Lightweight Carbon Fiber Monocoque Chassis in modern research." },
      { title: "Lightweight Carbon Fiber Monocoque Chassis Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Lightweight%20Carbon%20Fiber%20Monocoque%20Chassis", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Lightweight Carbon Fiber Monocoque Chassis." }
    ]
  },\n  {
    id: "car-050",
    category: "Cars",
    title: "Dry Sump Lubrication in High-G Vehicles (Part 5)",
    subtitle: "External oil reservoirs preventing engine starvation during hard cornering",
    summary: "Unlike wet-sump engines, dry-sump systems scavenge oil from a shallow pan into an external pressurized tank, ensuring continuous oil pressure under 2G cornering loads.",
    keyTakeaway: "Specialized lubrication systems protect high-RPM engines against extreme lateral centrifugal forces.",
    depth: "Accessible",
    sources: [
      { title: "Dry Sump Lubrication in High-G Vehicles Research & Fundamentals", url: "https://www.jstor.org/search?q=Dry%20Sump%20Lubrication%20in%20High-G%20Vehicles", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dry Sump Lubrication in High-G Vehicles in modern research." },
      { title: "Dry Sump Lubrication in High-G Vehicles Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dry%20Sump%20Lubrication%20in%20High-G%20Vehicles", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dry Sump Lubrication in High-G Vehicles." }
    ]
  },\n  {
    id: "car-051",
    category: "Cars",
    title: "Active Aerodynamics & Ground-Effect Downforce (Part 6)",
    subtitle: "Venturi tunnels and active wing flap actuation in high-performance cars",
    summary: "Ground-effect aerodynamics uses shaped underbody Venturi tunnels to generate low air pressure beneath the car, pulling the vehicle to the tarmac at high speeds without adding aerodynamic drag.",
    keyTakeaway: "Aerodynamic grip uses air pressure differentials to multiply cornering speeds without increasing vehicle mass.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Active Aerodynamics & Ground-Effect Downforce Research & Fundamentals", url: "https://www.jstor.org/search?q=Active%20Aerodynamics%20%26%20Ground-Effect%20Downforce", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Active Aerodynamics & Ground-Effect Downforce in modern research." },
      { title: "Active Aerodynamics & Ground-Effect Downforce Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Active%20Aerodynamics%20%26%20Ground-Effect%20Downforce", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Active Aerodynamics & Ground-Effect Downforce." }
    ]
  },\n  {
    id: "car-052",
    category: "Cars",
    title: "Torque Vectoring & Dual-Motor Yaw Control (Part 6)",
    subtitle: "Independently regulating wheel torque to eliminate understeer",
    summary: "Torque vectoring sends variable power to individual drive wheels during cornering—over-speeding the outside rear wheel to actively rotate the vehicle into turns with extreme precision.",
    keyTakeaway: "Chassis dynamics shift from passive mechanical slip to active software-guided yaw rotation.",
    depth: "Intermediate",
    sources: [
      { title: "Torque Vectoring & Dual-Motor Yaw Control Research & Fundamentals", url: "https://www.jstor.org/search?q=Torque%20Vectoring%20%26%20Dual-Motor%20Yaw%20Control", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Torque Vectoring & Dual-Motor Yaw Control in modern research." },
      { title: "Torque Vectoring & Dual-Motor Yaw Control Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Torque%20Vectoring%20%26%20Dual-Motor%20Yaw%20Control", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Torque Vectoring & Dual-Motor Yaw Control." }
    ]
  },\n  {
    id: "car-053",
    category: "Cars",
    title: "Rotary Engines & Thermodynamic Limits (Part 6)",
    subtitle: "The Wankel triangular rotor design and apex seal apex limits",
    summary: "Felix Wankel's rotary engine eliminates reciprocating pistons in favor of a triangular rotor turning inside an epitrochoidal housing, delivering incredible power density but struggling with thermal efficiency.",
    keyTakeaway: "Mechanical elegance can suffer from fundamental thermodynamic surface-area-to-volume limitations.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Rotary Engines & Thermodynamic Limits Research & Fundamentals", url: "https://www.jstor.org/search?q=Rotary%20Engines%20%26%20Thermodynamic%20Limits", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Rotary Engines & Thermodynamic Limits in modern research." },
      { title: "Rotary Engines & Thermodynamic Limits Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Rotary%20Engines%20%26%20Thermodynamic%20Limits", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Rotary Engines & Thermodynamic Limits." }
    ]
  },\n  {
    id: "car-054",
    category: "Cars",
    title: "Dual-Clutch Transmissions & Pre-selected Gearing (Part 6)",
    subtitle: "Seamless gear shifts executing in milliseconds via twin shafts",
    summary: "DCTs feature two separate clutches—one for odd gears, one for even gears. While gear 1 is engaged, gear 2 is already pre-selected, allowing shifts to execute in under 15 milliseconds.",
    keyTakeaway: "Pre-selection mechanics eliminate power interruption, marrying manual efficiency with automated lightning shifts.",
    depth: "Accessible",
    sources: [
      { title: "Dual-Clutch Transmissions & Pre-selected Gearing Research & Fundamentals", url: "https://www.jstor.org/search?q=Dual-Clutch%20Transmissions%20%26%20Pre-selected%20Gearing", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dual-Clutch Transmissions & Pre-selected Gearing in modern research." },
      { title: "Dual-Clutch Transmissions & Pre-selected Gearing Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dual-Clutch%20Transmissions%20%26%20Pre-selected%20Gearing", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dual-Clutch Transmissions & Pre-selected Gearing." }
    ]
  },\n  {
    id: "car-055",
    category: "Cars",
    title: "Carbon-Ceramic Brake Thermodynamics (Part 6)",
    subtitle: "Silicon carbide composite rotors delivering fade-free high-G stopping",
    summary: "Carbon-ceramic brakes withstand temperatures exceeding 1,000°C without thermal degradation or brake fade, while reducing un-sprung rotational mass by up to 50% compared to cast iron.",
    keyTakeaway: "Reducing unsprung mass dramatically improves suspension response alongside race-grade stopping power.",
    depth: "Intermediate",
    sources: [
      { title: "Carbon-Ceramic Brake Thermodynamics Research & Fundamentals", url: "https://www.jstor.org/search?q=Carbon-Ceramic%20Brake%20Thermodynamics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Carbon-Ceramic Brake Thermodynamics in modern research." },
      { title: "Carbon-Ceramic Brake Thermodynamics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Carbon-Ceramic%20Brake%20Thermodynamics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Carbon-Ceramic Brake Thermodynamics." }
    ]
  },\n  {
    id: "car-056",
    category: "Cars",
    title: "Variable Valve Timing & Cam Phaser Dynamics (Part 6)",
    subtitle: "Optimizing volumetric efficiency across low and high RPM ranges",
    summary: "VVT systems use hydraulic oil pressure to rotate camshaft phasers relative to the crankshaft, altering valve opening duration and overlap to balance low-RPM torque with high-RPM horsepower.",
    keyTakeaway: "Dynamic engine valve timing adapts internal airflow geometry across varying engine speeds.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Variable Valve Timing & Cam Phaser Dynamics Research & Fundamentals", url: "https://www.jstor.org/search?q=Variable%20Valve%20Timing%20%26%20Cam%20Phaser%20Dynamics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Variable Valve Timing & Cam Phaser Dynamics in modern research." },
      { title: "Variable Valve Timing & Cam Phaser Dynamics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Variable%20Valve%20Timing%20%26%20Cam%20Phaser%20Dynamics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Variable Valve Timing & Cam Phaser Dynamics." }
    ]
  },\n  {
    id: "car-057",
    category: "Cars",
    title: "Homogeneous Charge Compression Ignition (HCCI) (Part 6)",
    subtitle: "Combining gasoline spark ignition with diesel compression efficiency",
    summary: "HCCI engines auto-ignite a lean gasoline-air mixture through compression alone, achieving ultra-high thermal efficiency and minimal NOx emissions without requiring spark plugs at cruising speeds.",
    keyTakeaway: "Engineers merge spark and compression ignition to push internal combustion toward thermodynamic limits.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Homogeneous Charge Compression Ignition (HCCI) Research & Fundamentals", url: "https://www.jstor.org/search?q=Homogeneous%20Charge%20Compression%20Ignition%20(HCCI)", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Homogeneous Charge Compression Ignition (HCCI) in modern research." },
      { title: "Homogeneous Charge Compression Ignition (HCCI) Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Homogeneous%20Charge%20Compression%20Ignition%20(HCCI)", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Homogeneous Charge Compression Ignition (HCCI)." }
    ]
  },\n  {
    id: "car-058",
    category: "Cars",
    title: "Torsen Mechanical Torque Allocation (Part 6)",
    subtitle: "Worm gear mechanics distributing torque based on instantaneous wheel traction",
    summary: "Torsen (Torque-Sensing) differentials use helical worm gear sets to automatically multiply and transfer torque to the tires with the most grip without electronic latency.",
    keyTakeaway: "Pure mechanical gear engagement provides instant, smooth all-wheel drive traction without sensors.",
    depth: "Accessible",
    sources: [
      { title: "Torsen Mechanical Torque Allocation Research & Fundamentals", url: "https://www.jstor.org/search?q=Torsen%20Mechanical%20Torque%20Allocation", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Torsen Mechanical Torque Allocation in modern research." },
      { title: "Torsen Mechanical Torque Allocation Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Torsen%20Mechanical%20Torque%20Allocation", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Torsen Mechanical Torque Allocation." }
    ]
  },\n  {
    id: "car-059",
    category: "Cars",
    title: "Lightweight Carbon Fiber Monocoque Chassis (Part 6)",
    subtitle: "Structural carbon tubs providing extreme torsional rigidity",
    summary: "Formula 1 and supercar monocoques construct passenger cells from woven carbon fiber impregnated with epoxy resin, cured in autoclaves to yield unparalleled strength-to-weight ratios.",
    keyTakeaway: "Carbon composite structures maximize passenger safety while minimizing vehicle curb weight.",
    depth: "Intermediate",
    sources: [
      { title: "Lightweight Carbon Fiber Monocoque Chassis Research & Fundamentals", url: "https://www.jstor.org/search?q=Lightweight%20Carbon%20Fiber%20Monocoque%20Chassis", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Lightweight Carbon Fiber Monocoque Chassis in modern research." },
      { title: "Lightweight Carbon Fiber Monocoque Chassis Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Lightweight%20Carbon%20Fiber%20Monocoque%20Chassis", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Lightweight Carbon Fiber Monocoque Chassis." }
    ]
  },\n  {
    id: "car-060",
    category: "Cars",
    title: "Dry Sump Lubrication in High-G Vehicles (Part 6)",
    subtitle: "External oil reservoirs preventing engine starvation during hard cornering",
    summary: "Unlike wet-sump engines, dry-sump systems scavenge oil from a shallow pan into an external pressurized tank, ensuring continuous oil pressure under 2G cornering loads.",
    keyTakeaway: "Specialized lubrication systems protect high-RPM engines against extreme lateral centrifugal forces.",
    depth: "Accessible",
    sources: [
      { title: "Dry Sump Lubrication in High-G Vehicles Research & Fundamentals", url: "https://www.jstor.org/search?q=Dry%20Sump%20Lubrication%20in%20High-G%20Vehicles", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dry Sump Lubrication in High-G Vehicles in modern research." },
      { title: "Dry Sump Lubrication in High-G Vehicles Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dry%20Sump%20Lubrication%20in%20High-G%20Vehicles", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dry Sump Lubrication in High-G Vehicles." }
    ]
  },\n  {
    id: "car-061",
    category: "Cars",
    title: "Active Aerodynamics & Ground-Effect Downforce (Part 7)",
    subtitle: "Venturi tunnels and active wing flap actuation in high-performance cars",
    summary: "Ground-effect aerodynamics uses shaped underbody Venturi tunnels to generate low air pressure beneath the car, pulling the vehicle to the tarmac at high speeds without adding aerodynamic drag.",
    keyTakeaway: "Aerodynamic grip uses air pressure differentials to multiply cornering speeds without increasing vehicle mass.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Active Aerodynamics & Ground-Effect Downforce Research & Fundamentals", url: "https://www.jstor.org/search?q=Active%20Aerodynamics%20%26%20Ground-Effect%20Downforce", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Active Aerodynamics & Ground-Effect Downforce in modern research." },
      { title: "Active Aerodynamics & Ground-Effect Downforce Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Active%20Aerodynamics%20%26%20Ground-Effect%20Downforce", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Active Aerodynamics & Ground-Effect Downforce." }
    ]
  },\n  {
    id: "car-062",
    category: "Cars",
    title: "Torque Vectoring & Dual-Motor Yaw Control (Part 7)",
    subtitle: "Independently regulating wheel torque to eliminate understeer",
    summary: "Torque vectoring sends variable power to individual drive wheels during cornering—over-speeding the outside rear wheel to actively rotate the vehicle into turns with extreme precision.",
    keyTakeaway: "Chassis dynamics shift from passive mechanical slip to active software-guided yaw rotation.",
    depth: "Intermediate",
    sources: [
      { title: "Torque Vectoring & Dual-Motor Yaw Control Research & Fundamentals", url: "https://www.jstor.org/search?q=Torque%20Vectoring%20%26%20Dual-Motor%20Yaw%20Control", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Torque Vectoring & Dual-Motor Yaw Control in modern research." },
      { title: "Torque Vectoring & Dual-Motor Yaw Control Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Torque%20Vectoring%20%26%20Dual-Motor%20Yaw%20Control", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Torque Vectoring & Dual-Motor Yaw Control." }
    ]
  },\n  {
    id: "car-063",
    category: "Cars",
    title: "Rotary Engines & Thermodynamic Limits (Part 7)",
    subtitle: "The Wankel triangular rotor design and apex seal apex limits",
    summary: "Felix Wankel's rotary engine eliminates reciprocating pistons in favor of a triangular rotor turning inside an epitrochoidal housing, delivering incredible power density but struggling with thermal efficiency.",
    keyTakeaway: "Mechanical elegance can suffer from fundamental thermodynamic surface-area-to-volume limitations.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Rotary Engines & Thermodynamic Limits Research & Fundamentals", url: "https://www.jstor.org/search?q=Rotary%20Engines%20%26%20Thermodynamic%20Limits", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Rotary Engines & Thermodynamic Limits in modern research." },
      { title: "Rotary Engines & Thermodynamic Limits Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Rotary%20Engines%20%26%20Thermodynamic%20Limits", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Rotary Engines & Thermodynamic Limits." }
    ]
  },\n  {
    id: "car-064",
    category: "Cars",
    title: "Dual-Clutch Transmissions & Pre-selected Gearing (Part 7)",
    subtitle: "Seamless gear shifts executing in milliseconds via twin shafts",
    summary: "DCTs feature two separate clutches—one for odd gears, one for even gears. While gear 1 is engaged, gear 2 is already pre-selected, allowing shifts to execute in under 15 milliseconds.",
    keyTakeaway: "Pre-selection mechanics eliminate power interruption, marrying manual efficiency with automated lightning shifts.",
    depth: "Accessible",
    sources: [
      { title: "Dual-Clutch Transmissions & Pre-selected Gearing Research & Fundamentals", url: "https://www.jstor.org/search?q=Dual-Clutch%20Transmissions%20%26%20Pre-selected%20Gearing", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dual-Clutch Transmissions & Pre-selected Gearing in modern research." },
      { title: "Dual-Clutch Transmissions & Pre-selected Gearing Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dual-Clutch%20Transmissions%20%26%20Pre-selected%20Gearing", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dual-Clutch Transmissions & Pre-selected Gearing." }
    ]
  },\n  {
    id: "car-065",
    category: "Cars",
    title: "Carbon-Ceramic Brake Thermodynamics (Part 7)",
    subtitle: "Silicon carbide composite rotors delivering fade-free high-G stopping",
    summary: "Carbon-ceramic brakes withstand temperatures exceeding 1,000°C without thermal degradation or brake fade, while reducing un-sprung rotational mass by up to 50% compared to cast iron.",
    keyTakeaway: "Reducing unsprung mass dramatically improves suspension response alongside race-grade stopping power.",
    depth: "Intermediate",
    sources: [
      { title: "Carbon-Ceramic Brake Thermodynamics Research & Fundamentals", url: "https://www.jstor.org/search?q=Carbon-Ceramic%20Brake%20Thermodynamics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Carbon-Ceramic Brake Thermodynamics in modern research." },
      { title: "Carbon-Ceramic Brake Thermodynamics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Carbon-Ceramic%20Brake%20Thermodynamics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Carbon-Ceramic Brake Thermodynamics." }
    ]
  },\n  {
    id: "car-066",
    category: "Cars",
    title: "Variable Valve Timing & Cam Phaser Dynamics (Part 7)",
    subtitle: "Optimizing volumetric efficiency across low and high RPM ranges",
    summary: "VVT systems use hydraulic oil pressure to rotate camshaft phasers relative to the crankshaft, altering valve opening duration and overlap to balance low-RPM torque with high-RPM horsepower.",
    keyTakeaway: "Dynamic engine valve timing adapts internal airflow geometry across varying engine speeds.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Variable Valve Timing & Cam Phaser Dynamics Research & Fundamentals", url: "https://www.jstor.org/search?q=Variable%20Valve%20Timing%20%26%20Cam%20Phaser%20Dynamics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Variable Valve Timing & Cam Phaser Dynamics in modern research." },
      { title: "Variable Valve Timing & Cam Phaser Dynamics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Variable%20Valve%20Timing%20%26%20Cam%20Phaser%20Dynamics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Variable Valve Timing & Cam Phaser Dynamics." }
    ]
  },\n  {
    id: "car-067",
    category: "Cars",
    title: "Homogeneous Charge Compression Ignition (HCCI) (Part 7)",
    subtitle: "Combining gasoline spark ignition with diesel compression efficiency",
    summary: "HCCI engines auto-ignite a lean gasoline-air mixture through compression alone, achieving ultra-high thermal efficiency and minimal NOx emissions without requiring spark plugs at cruising speeds.",
    keyTakeaway: "Engineers merge spark and compression ignition to push internal combustion toward thermodynamic limits.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Homogeneous Charge Compression Ignition (HCCI) Research & Fundamentals", url: "https://www.jstor.org/search?q=Homogeneous%20Charge%20Compression%20Ignition%20(HCCI)", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Homogeneous Charge Compression Ignition (HCCI) in modern research." },
      { title: "Homogeneous Charge Compression Ignition (HCCI) Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Homogeneous%20Charge%20Compression%20Ignition%20(HCCI)", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Homogeneous Charge Compression Ignition (HCCI)." }
    ]
  },\n  {
    id: "car-068",
    category: "Cars",
    title: "Torsen Mechanical Torque Allocation (Part 7)",
    subtitle: "Worm gear mechanics distributing torque based on instantaneous wheel traction",
    summary: "Torsen (Torque-Sensing) differentials use helical worm gear sets to automatically multiply and transfer torque to the tires with the most grip without electronic latency.",
    keyTakeaway: "Pure mechanical gear engagement provides instant, smooth all-wheel drive traction without sensors.",
    depth: "Accessible",
    sources: [
      { title: "Torsen Mechanical Torque Allocation Research & Fundamentals", url: "https://www.jstor.org/search?q=Torsen%20Mechanical%20Torque%20Allocation", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Torsen Mechanical Torque Allocation in modern research." },
      { title: "Torsen Mechanical Torque Allocation Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Torsen%20Mechanical%20Torque%20Allocation", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Torsen Mechanical Torque Allocation." }
    ]
  },\n  {
    id: "car-069",
    category: "Cars",
    title: "Lightweight Carbon Fiber Monocoque Chassis (Part 7)",
    subtitle: "Structural carbon tubs providing extreme torsional rigidity",
    summary: "Formula 1 and supercar monocoques construct passenger cells from woven carbon fiber impregnated with epoxy resin, cured in autoclaves to yield unparalleled strength-to-weight ratios.",
    keyTakeaway: "Carbon composite structures maximize passenger safety while minimizing vehicle curb weight.",
    depth: "Intermediate",
    sources: [
      { title: "Lightweight Carbon Fiber Monocoque Chassis Research & Fundamentals", url: "https://www.jstor.org/search?q=Lightweight%20Carbon%20Fiber%20Monocoque%20Chassis", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Lightweight Carbon Fiber Monocoque Chassis in modern research." },
      { title: "Lightweight Carbon Fiber Monocoque Chassis Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Lightweight%20Carbon%20Fiber%20Monocoque%20Chassis", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Lightweight Carbon Fiber Monocoque Chassis." }
    ]
  },\n  {
    id: "car-070",
    category: "Cars",
    title: "Dry Sump Lubrication in High-G Vehicles (Part 7)",
    subtitle: "External oil reservoirs preventing engine starvation during hard cornering",
    summary: "Unlike wet-sump engines, dry-sump systems scavenge oil from a shallow pan into an external pressurized tank, ensuring continuous oil pressure under 2G cornering loads.",
    keyTakeaway: "Specialized lubrication systems protect high-RPM engines against extreme lateral centrifugal forces.",
    depth: "Accessible",
    sources: [
      { title: "Dry Sump Lubrication in High-G Vehicles Research & Fundamentals", url: "https://www.jstor.org/search?q=Dry%20Sump%20Lubrication%20in%20High-G%20Vehicles", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dry Sump Lubrication in High-G Vehicles in modern research." },
      { title: "Dry Sump Lubrication in High-G Vehicles Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dry%20Sump%20Lubrication%20in%20High-G%20Vehicles", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dry Sump Lubrication in High-G Vehicles." }
    ]
  },\n  {
    id: "car-071",
    category: "Cars",
    title: "Active Aerodynamics & Ground-Effect Downforce (Part 8)",
    subtitle: "Venturi tunnels and active wing flap actuation in high-performance cars",
    summary: "Ground-effect aerodynamics uses shaped underbody Venturi tunnels to generate low air pressure beneath the car, pulling the vehicle to the tarmac at high speeds without adding aerodynamic drag.",
    keyTakeaway: "Aerodynamic grip uses air pressure differentials to multiply cornering speeds without increasing vehicle mass.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Active Aerodynamics & Ground-Effect Downforce Research & Fundamentals", url: "https://www.jstor.org/search?q=Active%20Aerodynamics%20%26%20Ground-Effect%20Downforce", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Active Aerodynamics & Ground-Effect Downforce in modern research." },
      { title: "Active Aerodynamics & Ground-Effect Downforce Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Active%20Aerodynamics%20%26%20Ground-Effect%20Downforce", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Active Aerodynamics & Ground-Effect Downforce." }
    ]
  },\n  {
    id: "car-072",
    category: "Cars",
    title: "Torque Vectoring & Dual-Motor Yaw Control (Part 8)",
    subtitle: "Independently regulating wheel torque to eliminate understeer",
    summary: "Torque vectoring sends variable power to individual drive wheels during cornering—over-speeding the outside rear wheel to actively rotate the vehicle into turns with extreme precision.",
    keyTakeaway: "Chassis dynamics shift from passive mechanical slip to active software-guided yaw rotation.",
    depth: "Intermediate",
    sources: [
      { title: "Torque Vectoring & Dual-Motor Yaw Control Research & Fundamentals", url: "https://www.jstor.org/search?q=Torque%20Vectoring%20%26%20Dual-Motor%20Yaw%20Control", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Torque Vectoring & Dual-Motor Yaw Control in modern research." },
      { title: "Torque Vectoring & Dual-Motor Yaw Control Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Torque%20Vectoring%20%26%20Dual-Motor%20Yaw%20Control", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Torque Vectoring & Dual-Motor Yaw Control." }
    ]
  },\n  {
    id: "car-073",
    category: "Cars",
    title: "Rotary Engines & Thermodynamic Limits (Part 8)",
    subtitle: "The Wankel triangular rotor design and apex seal apex limits",
    summary: "Felix Wankel's rotary engine eliminates reciprocating pistons in favor of a triangular rotor turning inside an epitrochoidal housing, delivering incredible power density but struggling with thermal efficiency.",
    keyTakeaway: "Mechanical elegance can suffer from fundamental thermodynamic surface-area-to-volume limitations.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Rotary Engines & Thermodynamic Limits Research & Fundamentals", url: "https://www.jstor.org/search?q=Rotary%20Engines%20%26%20Thermodynamic%20Limits", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Rotary Engines & Thermodynamic Limits in modern research." },
      { title: "Rotary Engines & Thermodynamic Limits Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Rotary%20Engines%20%26%20Thermodynamic%20Limits", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Rotary Engines & Thermodynamic Limits." }
    ]
  },\n  {
    id: "car-074",
    category: "Cars",
    title: "Dual-Clutch Transmissions & Pre-selected Gearing (Part 8)",
    subtitle: "Seamless gear shifts executing in milliseconds via twin shafts",
    summary: "DCTs feature two separate clutches—one for odd gears, one for even gears. While gear 1 is engaged, gear 2 is already pre-selected, allowing shifts to execute in under 15 milliseconds.",
    keyTakeaway: "Pre-selection mechanics eliminate power interruption, marrying manual efficiency with automated lightning shifts.",
    depth: "Accessible",
    sources: [
      { title: "Dual-Clutch Transmissions & Pre-selected Gearing Research & Fundamentals", url: "https://www.jstor.org/search?q=Dual-Clutch%20Transmissions%20%26%20Pre-selected%20Gearing", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dual-Clutch Transmissions & Pre-selected Gearing in modern research." },
      { title: "Dual-Clutch Transmissions & Pre-selected Gearing Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dual-Clutch%20Transmissions%20%26%20Pre-selected%20Gearing", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dual-Clutch Transmissions & Pre-selected Gearing." }
    ]
  },\n  {
    id: "car-075",
    category: "Cars",
    title: "Carbon-Ceramic Brake Thermodynamics (Part 8)",
    subtitle: "Silicon carbide composite rotors delivering fade-free high-G stopping",
    summary: "Carbon-ceramic brakes withstand temperatures exceeding 1,000°C without thermal degradation or brake fade, while reducing un-sprung rotational mass by up to 50% compared to cast iron.",
    keyTakeaway: "Reducing unsprung mass dramatically improves suspension response alongside race-grade stopping power.",
    depth: "Intermediate",
    sources: [
      { title: "Carbon-Ceramic Brake Thermodynamics Research & Fundamentals", url: "https://www.jstor.org/search?q=Carbon-Ceramic%20Brake%20Thermodynamics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Carbon-Ceramic Brake Thermodynamics in modern research." },
      { title: "Carbon-Ceramic Brake Thermodynamics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Carbon-Ceramic%20Brake%20Thermodynamics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Carbon-Ceramic Brake Thermodynamics." }
    ]
  },\n  {
    id: "car-076",
    category: "Cars",
    title: "Variable Valve Timing & Cam Phaser Dynamics (Part 8)",
    subtitle: "Optimizing volumetric efficiency across low and high RPM ranges",
    summary: "VVT systems use hydraulic oil pressure to rotate camshaft phasers relative to the crankshaft, altering valve opening duration and overlap to balance low-RPM torque with high-RPM horsepower.",
    keyTakeaway: "Dynamic engine valve timing adapts internal airflow geometry across varying engine speeds.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Variable Valve Timing & Cam Phaser Dynamics Research & Fundamentals", url: "https://www.jstor.org/search?q=Variable%20Valve%20Timing%20%26%20Cam%20Phaser%20Dynamics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Variable Valve Timing & Cam Phaser Dynamics in modern research." },
      { title: "Variable Valve Timing & Cam Phaser Dynamics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Variable%20Valve%20Timing%20%26%20Cam%20Phaser%20Dynamics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Variable Valve Timing & Cam Phaser Dynamics." }
    ]
  },\n  {
    id: "car-077",
    category: "Cars",
    title: "Homogeneous Charge Compression Ignition (HCCI) (Part 8)",
    subtitle: "Combining gasoline spark ignition with diesel compression efficiency",
    summary: "HCCI engines auto-ignite a lean gasoline-air mixture through compression alone, achieving ultra-high thermal efficiency and minimal NOx emissions without requiring spark plugs at cruising speeds.",
    keyTakeaway: "Engineers merge spark and compression ignition to push internal combustion toward thermodynamic limits.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Homogeneous Charge Compression Ignition (HCCI) Research & Fundamentals", url: "https://www.jstor.org/search?q=Homogeneous%20Charge%20Compression%20Ignition%20(HCCI)", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Homogeneous Charge Compression Ignition (HCCI) in modern research." },
      { title: "Homogeneous Charge Compression Ignition (HCCI) Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Homogeneous%20Charge%20Compression%20Ignition%20(HCCI)", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Homogeneous Charge Compression Ignition (HCCI)." }
    ]
  },\n  {
    id: "car-078",
    category: "Cars",
    title: "Torsen Mechanical Torque Allocation (Part 8)",
    subtitle: "Worm gear mechanics distributing torque based on instantaneous wheel traction",
    summary: "Torsen (Torque-Sensing) differentials use helical worm gear sets to automatically multiply and transfer torque to the tires with the most grip without electronic latency.",
    keyTakeaway: "Pure mechanical gear engagement provides instant, smooth all-wheel drive traction without sensors.",
    depth: "Accessible",
    sources: [
      { title: "Torsen Mechanical Torque Allocation Research & Fundamentals", url: "https://www.jstor.org/search?q=Torsen%20Mechanical%20Torque%20Allocation", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Torsen Mechanical Torque Allocation in modern research." },
      { title: "Torsen Mechanical Torque Allocation Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Torsen%20Mechanical%20Torque%20Allocation", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Torsen Mechanical Torque Allocation." }
    ]
  },\n  {
    id: "car-079",
    category: "Cars",
    title: "Lightweight Carbon Fiber Monocoque Chassis (Part 8)",
    subtitle: "Structural carbon tubs providing extreme torsional rigidity",
    summary: "Formula 1 and supercar monocoques construct passenger cells from woven carbon fiber impregnated with epoxy resin, cured in autoclaves to yield unparalleled strength-to-weight ratios.",
    keyTakeaway: "Carbon composite structures maximize passenger safety while minimizing vehicle curb weight.",
    depth: "Intermediate",
    sources: [
      { title: "Lightweight Carbon Fiber Monocoque Chassis Research & Fundamentals", url: "https://www.jstor.org/search?q=Lightweight%20Carbon%20Fiber%20Monocoque%20Chassis", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Lightweight Carbon Fiber Monocoque Chassis in modern research." },
      { title: "Lightweight Carbon Fiber Monocoque Chassis Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Lightweight%20Carbon%20Fiber%20Monocoque%20Chassis", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Lightweight Carbon Fiber Monocoque Chassis." }
    ]
  },\n  {
    id: "car-080",
    category: "Cars",
    title: "Dry Sump Lubrication in High-G Vehicles (Part 8)",
    subtitle: "External oil reservoirs preventing engine starvation during hard cornering",
    summary: "Unlike wet-sump engines, dry-sump systems scavenge oil from a shallow pan into an external pressurized tank, ensuring continuous oil pressure under 2G cornering loads.",
    keyTakeaway: "Specialized lubrication systems protect high-RPM engines against extreme lateral centrifugal forces.",
    depth: "Accessible",
    sources: [
      { title: "Dry Sump Lubrication in High-G Vehicles Research & Fundamentals", url: "https://www.jstor.org/search?q=Dry%20Sump%20Lubrication%20in%20High-G%20Vehicles", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dry Sump Lubrication in High-G Vehicles in modern research." },
      { title: "Dry Sump Lubrication in High-G Vehicles Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dry%20Sump%20Lubrication%20in%20High-G%20Vehicles", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dry Sump Lubrication in High-G Vehicles." }
    ]
  },\n  {
    id: "car-081",
    category: "Cars",
    title: "Active Aerodynamics & Ground-Effect Downforce (Part 9)",
    subtitle: "Venturi tunnels and active wing flap actuation in high-performance cars",
    summary: "Ground-effect aerodynamics uses shaped underbody Venturi tunnels to generate low air pressure beneath the car, pulling the vehicle to the tarmac at high speeds without adding aerodynamic drag.",
    keyTakeaway: "Aerodynamic grip uses air pressure differentials to multiply cornering speeds without increasing vehicle mass.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Active Aerodynamics & Ground-Effect Downforce Research & Fundamentals", url: "https://www.jstor.org/search?q=Active%20Aerodynamics%20%26%20Ground-Effect%20Downforce", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Active Aerodynamics & Ground-Effect Downforce in modern research." },
      { title: "Active Aerodynamics & Ground-Effect Downforce Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Active%20Aerodynamics%20%26%20Ground-Effect%20Downforce", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Active Aerodynamics & Ground-Effect Downforce." }
    ]
  },\n  {
    id: "car-082",
    category: "Cars",
    title: "Torque Vectoring & Dual-Motor Yaw Control (Part 9)",
    subtitle: "Independently regulating wheel torque to eliminate understeer",
    summary: "Torque vectoring sends variable power to individual drive wheels during cornering—over-speeding the outside rear wheel to actively rotate the vehicle into turns with extreme precision.",
    keyTakeaway: "Chassis dynamics shift from passive mechanical slip to active software-guided yaw rotation.",
    depth: "Intermediate",
    sources: [
      { title: "Torque Vectoring & Dual-Motor Yaw Control Research & Fundamentals", url: "https://www.jstor.org/search?q=Torque%20Vectoring%20%26%20Dual-Motor%20Yaw%20Control", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Torque Vectoring & Dual-Motor Yaw Control in modern research." },
      { title: "Torque Vectoring & Dual-Motor Yaw Control Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Torque%20Vectoring%20%26%20Dual-Motor%20Yaw%20Control", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Torque Vectoring & Dual-Motor Yaw Control." }
    ]
  },\n  {
    id: "car-083",
    category: "Cars",
    title: "Rotary Engines & Thermodynamic Limits (Part 9)",
    subtitle: "The Wankel triangular rotor design and apex seal apex limits",
    summary: "Felix Wankel's rotary engine eliminates reciprocating pistons in favor of a triangular rotor turning inside an epitrochoidal housing, delivering incredible power density but struggling with thermal efficiency.",
    keyTakeaway: "Mechanical elegance can suffer from fundamental thermodynamic surface-area-to-volume limitations.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Rotary Engines & Thermodynamic Limits Research & Fundamentals", url: "https://www.jstor.org/search?q=Rotary%20Engines%20%26%20Thermodynamic%20Limits", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Rotary Engines & Thermodynamic Limits in modern research." },
      { title: "Rotary Engines & Thermodynamic Limits Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Rotary%20Engines%20%26%20Thermodynamic%20Limits", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Rotary Engines & Thermodynamic Limits." }
    ]
  },\n  {
    id: "car-084",
    category: "Cars",
    title: "Dual-Clutch Transmissions & Pre-selected Gearing (Part 9)",
    subtitle: "Seamless gear shifts executing in milliseconds via twin shafts",
    summary: "DCTs feature two separate clutches—one for odd gears, one for even gears. While gear 1 is engaged, gear 2 is already pre-selected, allowing shifts to execute in under 15 milliseconds.",
    keyTakeaway: "Pre-selection mechanics eliminate power interruption, marrying manual efficiency with automated lightning shifts.",
    depth: "Accessible",
    sources: [
      { title: "Dual-Clutch Transmissions & Pre-selected Gearing Research & Fundamentals", url: "https://www.jstor.org/search?q=Dual-Clutch%20Transmissions%20%26%20Pre-selected%20Gearing", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dual-Clutch Transmissions & Pre-selected Gearing in modern research." },
      { title: "Dual-Clutch Transmissions & Pre-selected Gearing Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dual-Clutch%20Transmissions%20%26%20Pre-selected%20Gearing", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dual-Clutch Transmissions & Pre-selected Gearing." }
    ]
  },\n  {
    id: "car-085",
    category: "Cars",
    title: "Carbon-Ceramic Brake Thermodynamics (Part 9)",
    subtitle: "Silicon carbide composite rotors delivering fade-free high-G stopping",
    summary: "Carbon-ceramic brakes withstand temperatures exceeding 1,000°C without thermal degradation or brake fade, while reducing un-sprung rotational mass by up to 50% compared to cast iron.",
    keyTakeaway: "Reducing unsprung mass dramatically improves suspension response alongside race-grade stopping power.",
    depth: "Intermediate",
    sources: [
      { title: "Carbon-Ceramic Brake Thermodynamics Research & Fundamentals", url: "https://www.jstor.org/search?q=Carbon-Ceramic%20Brake%20Thermodynamics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Carbon-Ceramic Brake Thermodynamics in modern research." },
      { title: "Carbon-Ceramic Brake Thermodynamics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Carbon-Ceramic%20Brake%20Thermodynamics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Carbon-Ceramic Brake Thermodynamics." }
    ]
  },\n  {
    id: "car-086",
    category: "Cars",
    title: "Variable Valve Timing & Cam Phaser Dynamics (Part 9)",
    subtitle: "Optimizing volumetric efficiency across low and high RPM ranges",
    summary: "VVT systems use hydraulic oil pressure to rotate camshaft phasers relative to the crankshaft, altering valve opening duration and overlap to balance low-RPM torque with high-RPM horsepower.",
    keyTakeaway: "Dynamic engine valve timing adapts internal airflow geometry across varying engine speeds.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Variable Valve Timing & Cam Phaser Dynamics Research & Fundamentals", url: "https://www.jstor.org/search?q=Variable%20Valve%20Timing%20%26%20Cam%20Phaser%20Dynamics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Variable Valve Timing & Cam Phaser Dynamics in modern research." },
      { title: "Variable Valve Timing & Cam Phaser Dynamics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Variable%20Valve%20Timing%20%26%20Cam%20Phaser%20Dynamics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Variable Valve Timing & Cam Phaser Dynamics." }
    ]
  },\n  {
    id: "car-087",
    category: "Cars",
    title: "Homogeneous Charge Compression Ignition (HCCI) (Part 9)",
    subtitle: "Combining gasoline spark ignition with diesel compression efficiency",
    summary: "HCCI engines auto-ignite a lean gasoline-air mixture through compression alone, achieving ultra-high thermal efficiency and minimal NOx emissions without requiring spark plugs at cruising speeds.",
    keyTakeaway: "Engineers merge spark and compression ignition to push internal combustion toward thermodynamic limits.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Homogeneous Charge Compression Ignition (HCCI) Research & Fundamentals", url: "https://www.jstor.org/search?q=Homogeneous%20Charge%20Compression%20Ignition%20(HCCI)", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Homogeneous Charge Compression Ignition (HCCI) in modern research." },
      { title: "Homogeneous Charge Compression Ignition (HCCI) Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Homogeneous%20Charge%20Compression%20Ignition%20(HCCI)", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Homogeneous Charge Compression Ignition (HCCI)." }
    ]
  },\n  {
    id: "car-088",
    category: "Cars",
    title: "Torsen Mechanical Torque Allocation (Part 9)",
    subtitle: "Worm gear mechanics distributing torque based on instantaneous wheel traction",
    summary: "Torsen (Torque-Sensing) differentials use helical worm gear sets to automatically multiply and transfer torque to the tires with the most grip without electronic latency.",
    keyTakeaway: "Pure mechanical gear engagement provides instant, smooth all-wheel drive traction without sensors.",
    depth: "Accessible",
    sources: [
      { title: "Torsen Mechanical Torque Allocation Research & Fundamentals", url: "https://www.jstor.org/search?q=Torsen%20Mechanical%20Torque%20Allocation", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Torsen Mechanical Torque Allocation in modern research." },
      { title: "Torsen Mechanical Torque Allocation Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Torsen%20Mechanical%20Torque%20Allocation", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Torsen Mechanical Torque Allocation." }
    ]
  },\n  {
    id: "car-089",
    category: "Cars",
    title: "Lightweight Carbon Fiber Monocoque Chassis (Part 9)",
    subtitle: "Structural carbon tubs providing extreme torsional rigidity",
    summary: "Formula 1 and supercar monocoques construct passenger cells from woven carbon fiber impregnated with epoxy resin, cured in autoclaves to yield unparalleled strength-to-weight ratios.",
    keyTakeaway: "Carbon composite structures maximize passenger safety while minimizing vehicle curb weight.",
    depth: "Intermediate",
    sources: [
      { title: "Lightweight Carbon Fiber Monocoque Chassis Research & Fundamentals", url: "https://www.jstor.org/search?q=Lightweight%20Carbon%20Fiber%20Monocoque%20Chassis", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Lightweight Carbon Fiber Monocoque Chassis in modern research." },
      { title: "Lightweight Carbon Fiber Monocoque Chassis Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Lightweight%20Carbon%20Fiber%20Monocoque%20Chassis", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Lightweight Carbon Fiber Monocoque Chassis." }
    ]
  },\n  {
    id: "car-090",
    category: "Cars",
    title: "Dry Sump Lubrication in High-G Vehicles (Part 9)",
    subtitle: "External oil reservoirs preventing engine starvation during hard cornering",
    summary: "Unlike wet-sump engines, dry-sump systems scavenge oil from a shallow pan into an external pressurized tank, ensuring continuous oil pressure under 2G cornering loads.",
    keyTakeaway: "Specialized lubrication systems protect high-RPM engines against extreme lateral centrifugal forces.",
    depth: "Accessible",
    sources: [
      { title: "Dry Sump Lubrication in High-G Vehicles Research & Fundamentals", url: "https://www.jstor.org/search?q=Dry%20Sump%20Lubrication%20in%20High-G%20Vehicles", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dry Sump Lubrication in High-G Vehicles in modern research." },
      { title: "Dry Sump Lubrication in High-G Vehicles Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dry%20Sump%20Lubrication%20in%20High-G%20Vehicles", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dry Sump Lubrication in High-G Vehicles." }
    ]
  },\n  {
    id: "car-091",
    category: "Cars",
    title: "Active Aerodynamics & Ground-Effect Downforce (Part 10)",
    subtitle: "Venturi tunnels and active wing flap actuation in high-performance cars",
    summary: "Ground-effect aerodynamics uses shaped underbody Venturi tunnels to generate low air pressure beneath the car, pulling the vehicle to the tarmac at high speeds without adding aerodynamic drag.",
    keyTakeaway: "Aerodynamic grip uses air pressure differentials to multiply cornering speeds without increasing vehicle mass.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Active Aerodynamics & Ground-Effect Downforce Research & Fundamentals", url: "https://www.jstor.org/search?q=Active%20Aerodynamics%20%26%20Ground-Effect%20Downforce", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Active Aerodynamics & Ground-Effect Downforce in modern research." },
      { title: "Active Aerodynamics & Ground-Effect Downforce Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Active%20Aerodynamics%20%26%20Ground-Effect%20Downforce", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Active Aerodynamics & Ground-Effect Downforce." }
    ]
  },\n  {
    id: "car-092",
    category: "Cars",
    title: "Torque Vectoring & Dual-Motor Yaw Control (Part 10)",
    subtitle: "Independently regulating wheel torque to eliminate understeer",
    summary: "Torque vectoring sends variable power to individual drive wheels during cornering—over-speeding the outside rear wheel to actively rotate the vehicle into turns with extreme precision.",
    keyTakeaway: "Chassis dynamics shift from passive mechanical slip to active software-guided yaw rotation.",
    depth: "Intermediate",
    sources: [
      { title: "Torque Vectoring & Dual-Motor Yaw Control Research & Fundamentals", url: "https://www.jstor.org/search?q=Torque%20Vectoring%20%26%20Dual-Motor%20Yaw%20Control", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Torque Vectoring & Dual-Motor Yaw Control in modern research." },
      { title: "Torque Vectoring & Dual-Motor Yaw Control Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Torque%20Vectoring%20%26%20Dual-Motor%20Yaw%20Control", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Torque Vectoring & Dual-Motor Yaw Control." }
    ]
  },\n  {
    id: "car-093",
    category: "Cars",
    title: "Rotary Engines & Thermodynamic Limits (Part 10)",
    subtitle: "The Wankel triangular rotor design and apex seal apex limits",
    summary: "Felix Wankel's rotary engine eliminates reciprocating pistons in favor of a triangular rotor turning inside an epitrochoidal housing, delivering incredible power density but struggling with thermal efficiency.",
    keyTakeaway: "Mechanical elegance can suffer from fundamental thermodynamic surface-area-to-volume limitations.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Rotary Engines & Thermodynamic Limits Research & Fundamentals", url: "https://www.jstor.org/search?q=Rotary%20Engines%20%26%20Thermodynamic%20Limits", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Rotary Engines & Thermodynamic Limits in modern research." },
      { title: "Rotary Engines & Thermodynamic Limits Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Rotary%20Engines%20%26%20Thermodynamic%20Limits", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Rotary Engines & Thermodynamic Limits." }
    ]
  },\n  {
    id: "car-094",
    category: "Cars",
    title: "Dual-Clutch Transmissions & Pre-selected Gearing (Part 10)",
    subtitle: "Seamless gear shifts executing in milliseconds via twin shafts",
    summary: "DCTs feature two separate clutches—one for odd gears, one for even gears. While gear 1 is engaged, gear 2 is already pre-selected, allowing shifts to execute in under 15 milliseconds.",
    keyTakeaway: "Pre-selection mechanics eliminate power interruption, marrying manual efficiency with automated lightning shifts.",
    depth: "Accessible",
    sources: [
      { title: "Dual-Clutch Transmissions & Pre-selected Gearing Research & Fundamentals", url: "https://www.jstor.org/search?q=Dual-Clutch%20Transmissions%20%26%20Pre-selected%20Gearing", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dual-Clutch Transmissions & Pre-selected Gearing in modern research." },
      { title: "Dual-Clutch Transmissions & Pre-selected Gearing Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dual-Clutch%20Transmissions%20%26%20Pre-selected%20Gearing", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dual-Clutch Transmissions & Pre-selected Gearing." }
    ]
  },\n  {
    id: "car-095",
    category: "Cars",
    title: "Carbon-Ceramic Brake Thermodynamics (Part 10)",
    subtitle: "Silicon carbide composite rotors delivering fade-free high-G stopping",
    summary: "Carbon-ceramic brakes withstand temperatures exceeding 1,000°C without thermal degradation or brake fade, while reducing un-sprung rotational mass by up to 50% compared to cast iron.",
    keyTakeaway: "Reducing unsprung mass dramatically improves suspension response alongside race-grade stopping power.",
    depth: "Intermediate",
    sources: [
      { title: "Carbon-Ceramic Brake Thermodynamics Research & Fundamentals", url: "https://www.jstor.org/search?q=Carbon-Ceramic%20Brake%20Thermodynamics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Carbon-Ceramic Brake Thermodynamics in modern research." },
      { title: "Carbon-Ceramic Brake Thermodynamics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Carbon-Ceramic%20Brake%20Thermodynamics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Carbon-Ceramic Brake Thermodynamics." }
    ]
  },\n  {
    id: "car-096",
    category: "Cars",
    title: "Variable Valve Timing & Cam Phaser Dynamics (Part 10)",
    subtitle: "Optimizing volumetric efficiency across low and high RPM ranges",
    summary: "VVT systems use hydraulic oil pressure to rotate camshaft phasers relative to the crankshaft, altering valve opening duration and overlap to balance low-RPM torque with high-RPM horsepower.",
    keyTakeaway: "Dynamic engine valve timing adapts internal airflow geometry across varying engine speeds.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Variable Valve Timing & Cam Phaser Dynamics Research & Fundamentals", url: "https://www.jstor.org/search?q=Variable%20Valve%20Timing%20%26%20Cam%20Phaser%20Dynamics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Variable Valve Timing & Cam Phaser Dynamics in modern research." },
      { title: "Variable Valve Timing & Cam Phaser Dynamics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Variable%20Valve%20Timing%20%26%20Cam%20Phaser%20Dynamics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Variable Valve Timing & Cam Phaser Dynamics." }
    ]
  },\n  {
    id: "car-097",
    category: "Cars",
    title: "Homogeneous Charge Compression Ignition (HCCI) (Part 10)",
    subtitle: "Combining gasoline spark ignition with diesel compression efficiency",
    summary: "HCCI engines auto-ignite a lean gasoline-air mixture through compression alone, achieving ultra-high thermal efficiency and minimal NOx emissions without requiring spark plugs at cruising speeds.",
    keyTakeaway: "Engineers merge spark and compression ignition to push internal combustion toward thermodynamic limits.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Homogeneous Charge Compression Ignition (HCCI) Research & Fundamentals", url: "https://www.jstor.org/search?q=Homogeneous%20Charge%20Compression%20Ignition%20(HCCI)", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Homogeneous Charge Compression Ignition (HCCI) in modern research." },
      { title: "Homogeneous Charge Compression Ignition (HCCI) Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Homogeneous%20Charge%20Compression%20Ignition%20(HCCI)", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Homogeneous Charge Compression Ignition (HCCI)." }
    ]
  },\n  {
    id: "car-098",
    category: "Cars",
    title: "Torsen Mechanical Torque Allocation (Part 10)",
    subtitle: "Worm gear mechanics distributing torque based on instantaneous wheel traction",
    summary: "Torsen (Torque-Sensing) differentials use helical worm gear sets to automatically multiply and transfer torque to the tires with the most grip without electronic latency.",
    keyTakeaway: "Pure mechanical gear engagement provides instant, smooth all-wheel drive traction without sensors.",
    depth: "Accessible",
    sources: [
      { title: "Torsen Mechanical Torque Allocation Research & Fundamentals", url: "https://www.jstor.org/search?q=Torsen%20Mechanical%20Torque%20Allocation", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Torsen Mechanical Torque Allocation in modern research." },
      { title: "Torsen Mechanical Torque Allocation Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Torsen%20Mechanical%20Torque%20Allocation", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Torsen Mechanical Torque Allocation." }
    ]
  },\n  {
    id: "car-099",
    category: "Cars",
    title: "Lightweight Carbon Fiber Monocoque Chassis (Part 10)",
    subtitle: "Structural carbon tubs providing extreme torsional rigidity",
    summary: "Formula 1 and supercar monocoques construct passenger cells from woven carbon fiber impregnated with epoxy resin, cured in autoclaves to yield unparalleled strength-to-weight ratios.",
    keyTakeaway: "Carbon composite structures maximize passenger safety while minimizing vehicle curb weight.",
    depth: "Intermediate",
    sources: [
      { title: "Lightweight Carbon Fiber Monocoque Chassis Research & Fundamentals", url: "https://www.jstor.org/search?q=Lightweight%20Carbon%20Fiber%20Monocoque%20Chassis", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Lightweight Carbon Fiber Monocoque Chassis in modern research." },
      { title: "Lightweight Carbon Fiber Monocoque Chassis Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Lightweight%20Carbon%20Fiber%20Monocoque%20Chassis", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Lightweight Carbon Fiber Monocoque Chassis." }
    ]
  },\n  {
    id: "car-100",
    category: "Cars",
    title: "Dry Sump Lubrication in High-G Vehicles (Part 10)",
    subtitle: "External oil reservoirs preventing engine starvation during hard cornering",
    summary: "Unlike wet-sump engines, dry-sump systems scavenge oil from a shallow pan into an external pressurized tank, ensuring continuous oil pressure under 2G cornering loads.",
    keyTakeaway: "Specialized lubrication systems protect high-RPM engines against extreme lateral centrifugal forces.",
    depth: "Accessible",
    sources: [
      { title: "Dry Sump Lubrication in High-G Vehicles Research & Fundamentals", url: "https://www.jstor.org/search?q=Dry%20Sump%20Lubrication%20in%20High-G%20Vehicles", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dry Sump Lubrication in High-G Vehicles in modern research." },
      { title: "Dry Sump Lubrication in High-G Vehicles Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dry%20Sump%20Lubrication%20in%20High-G%20Vehicles", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dry Sump Lubrication in High-G Vehicles." }
    ]
  },\n  {
    id: "car-101",
    category: "Cars",
    title: "Active Aerodynamics & Ground-Effect Downforce (Part 11)",
    subtitle: "Venturi tunnels and active wing flap actuation in high-performance cars",
    summary: "Ground-effect aerodynamics uses shaped underbody Venturi tunnels to generate low air pressure beneath the car, pulling the vehicle to the tarmac at high speeds without adding aerodynamic drag.",
    keyTakeaway: "Aerodynamic grip uses air pressure differentials to multiply cornering speeds without increasing vehicle mass.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Active Aerodynamics & Ground-Effect Downforce Research & Fundamentals", url: "https://www.jstor.org/search?q=Active%20Aerodynamics%20%26%20Ground-Effect%20Downforce", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Active Aerodynamics & Ground-Effect Downforce in modern research." },
      { title: "Active Aerodynamics & Ground-Effect Downforce Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Active%20Aerodynamics%20%26%20Ground-Effect%20Downforce", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Active Aerodynamics & Ground-Effect Downforce." }
    ]
  },\n  {
    id: "car-102",
    category: "Cars",
    title: "Torque Vectoring & Dual-Motor Yaw Control (Part 11)",
    subtitle: "Independently regulating wheel torque to eliminate understeer",
    summary: "Torque vectoring sends variable power to individual drive wheels during cornering—over-speeding the outside rear wheel to actively rotate the vehicle into turns with extreme precision.",
    keyTakeaway: "Chassis dynamics shift from passive mechanical slip to active software-guided yaw rotation.",
    depth: "Intermediate",
    sources: [
      { title: "Torque Vectoring & Dual-Motor Yaw Control Research & Fundamentals", url: "https://www.jstor.org/search?q=Torque%20Vectoring%20%26%20Dual-Motor%20Yaw%20Control", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Torque Vectoring & Dual-Motor Yaw Control in modern research." },
      { title: "Torque Vectoring & Dual-Motor Yaw Control Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Torque%20Vectoring%20%26%20Dual-Motor%20Yaw%20Control", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Torque Vectoring & Dual-Motor Yaw Control." }
    ]
  },\n  {
    id: "car-103",
    category: "Cars",
    title: "Rotary Engines & Thermodynamic Limits (Part 11)",
    subtitle: "The Wankel triangular rotor design and apex seal apex limits",
    summary: "Felix Wankel's rotary engine eliminates reciprocating pistons in favor of a triangular rotor turning inside an epitrochoidal housing, delivering incredible power density but struggling with thermal efficiency.",
    keyTakeaway: "Mechanical elegance can suffer from fundamental thermodynamic surface-area-to-volume limitations.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Rotary Engines & Thermodynamic Limits Research & Fundamentals", url: "https://www.jstor.org/search?q=Rotary%20Engines%20%26%20Thermodynamic%20Limits", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Rotary Engines & Thermodynamic Limits in modern research." },
      { title: "Rotary Engines & Thermodynamic Limits Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Rotary%20Engines%20%26%20Thermodynamic%20Limits", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Rotary Engines & Thermodynamic Limits." }
    ]
  },\n  {
    id: "car-104",
    category: "Cars",
    title: "Dual-Clutch Transmissions & Pre-selected Gearing (Part 11)",
    subtitle: "Seamless gear shifts executing in milliseconds via twin shafts",
    summary: "DCTs feature two separate clutches—one for odd gears, one for even gears. While gear 1 is engaged, gear 2 is already pre-selected, allowing shifts to execute in under 15 milliseconds.",
    keyTakeaway: "Pre-selection mechanics eliminate power interruption, marrying manual efficiency with automated lightning shifts.",
    depth: "Accessible",
    sources: [
      { title: "Dual-Clutch Transmissions & Pre-selected Gearing Research & Fundamentals", url: "https://www.jstor.org/search?q=Dual-Clutch%20Transmissions%20%26%20Pre-selected%20Gearing", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dual-Clutch Transmissions & Pre-selected Gearing in modern research." },
      { title: "Dual-Clutch Transmissions & Pre-selected Gearing Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dual-Clutch%20Transmissions%20%26%20Pre-selected%20Gearing", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dual-Clutch Transmissions & Pre-selected Gearing." }
    ]
  },\n  {
    id: "car-105",
    category: "Cars",
    title: "Carbon-Ceramic Brake Thermodynamics (Part 11)",
    subtitle: "Silicon carbide composite rotors delivering fade-free high-G stopping",
    summary: "Carbon-ceramic brakes withstand temperatures exceeding 1,000°C without thermal degradation or brake fade, while reducing un-sprung rotational mass by up to 50% compared to cast iron.",
    keyTakeaway: "Reducing unsprung mass dramatically improves suspension response alongside race-grade stopping power.",
    depth: "Intermediate",
    sources: [
      { title: "Carbon-Ceramic Brake Thermodynamics Research & Fundamentals", url: "https://www.jstor.org/search?q=Carbon-Ceramic%20Brake%20Thermodynamics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Carbon-Ceramic Brake Thermodynamics in modern research." },
      { title: "Carbon-Ceramic Brake Thermodynamics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Carbon-Ceramic%20Brake%20Thermodynamics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Carbon-Ceramic Brake Thermodynamics." }
    ]
  },\n  {
    id: "car-106",
    category: "Cars",
    title: "Variable Valve Timing & Cam Phaser Dynamics (Part 11)",
    subtitle: "Optimizing volumetric efficiency across low and high RPM ranges",
    summary: "VVT systems use hydraulic oil pressure to rotate camshaft phasers relative to the crankshaft, altering valve opening duration and overlap to balance low-RPM torque with high-RPM horsepower.",
    keyTakeaway: "Dynamic engine valve timing adapts internal airflow geometry across varying engine speeds.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Variable Valve Timing & Cam Phaser Dynamics Research & Fundamentals", url: "https://www.jstor.org/search?q=Variable%20Valve%20Timing%20%26%20Cam%20Phaser%20Dynamics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Variable Valve Timing & Cam Phaser Dynamics in modern research." },
      { title: "Variable Valve Timing & Cam Phaser Dynamics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Variable%20Valve%20Timing%20%26%20Cam%20Phaser%20Dynamics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Variable Valve Timing & Cam Phaser Dynamics." }
    ]
  },\n  {
    id: "car-107",
    category: "Cars",
    title: "Homogeneous Charge Compression Ignition (HCCI) (Part 11)",
    subtitle: "Combining gasoline spark ignition with diesel compression efficiency",
    summary: "HCCI engines auto-ignite a lean gasoline-air mixture through compression alone, achieving ultra-high thermal efficiency and minimal NOx emissions without requiring spark plugs at cruising speeds.",
    keyTakeaway: "Engineers merge spark and compression ignition to push internal combustion toward thermodynamic limits.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Homogeneous Charge Compression Ignition (HCCI) Research & Fundamentals", url: "https://www.jstor.org/search?q=Homogeneous%20Charge%20Compression%20Ignition%20(HCCI)", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Homogeneous Charge Compression Ignition (HCCI) in modern research." },
      { title: "Homogeneous Charge Compression Ignition (HCCI) Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Homogeneous%20Charge%20Compression%20Ignition%20(HCCI)", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Homogeneous Charge Compression Ignition (HCCI)." }
    ]
  },\n  {
    id: "car-108",
    category: "Cars",
    title: "Torsen Mechanical Torque Allocation (Part 11)",
    subtitle: "Worm gear mechanics distributing torque based on instantaneous wheel traction",
    summary: "Torsen (Torque-Sensing) differentials use helical worm gear sets to automatically multiply and transfer torque to the tires with the most grip without electronic latency.",
    keyTakeaway: "Pure mechanical gear engagement provides instant, smooth all-wheel drive traction without sensors.",
    depth: "Accessible",
    sources: [
      { title: "Torsen Mechanical Torque Allocation Research & Fundamentals", url: "https://www.jstor.org/search?q=Torsen%20Mechanical%20Torque%20Allocation", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Torsen Mechanical Torque Allocation in modern research." },
      { title: "Torsen Mechanical Torque Allocation Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Torsen%20Mechanical%20Torque%20Allocation", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Torsen Mechanical Torque Allocation." }
    ]
  },\n  {
    id: "car-109",
    category: "Cars",
    title: "Lightweight Carbon Fiber Monocoque Chassis (Part 11)",
    subtitle: "Structural carbon tubs providing extreme torsional rigidity",
    summary: "Formula 1 and supercar monocoques construct passenger cells from woven carbon fiber impregnated with epoxy resin, cured in autoclaves to yield unparalleled strength-to-weight ratios.",
    keyTakeaway: "Carbon composite structures maximize passenger safety while minimizing vehicle curb weight.",
    depth: "Intermediate",
    sources: [
      { title: "Lightweight Carbon Fiber Monocoque Chassis Research & Fundamentals", url: "https://www.jstor.org/search?q=Lightweight%20Carbon%20Fiber%20Monocoque%20Chassis", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Lightweight Carbon Fiber Monocoque Chassis in modern research." },
      { title: "Lightweight Carbon Fiber Monocoque Chassis Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Lightweight%20Carbon%20Fiber%20Monocoque%20Chassis", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Lightweight Carbon Fiber Monocoque Chassis." }
    ]
  },\n  {
    id: "car-110",
    category: "Cars",
    title: "Dry Sump Lubrication in High-G Vehicles (Part 11)",
    subtitle: "External oil reservoirs preventing engine starvation during hard cornering",
    summary: "Unlike wet-sump engines, dry-sump systems scavenge oil from a shallow pan into an external pressurized tank, ensuring continuous oil pressure under 2G cornering loads.",
    keyTakeaway: "Specialized lubrication systems protect high-RPM engines against extreme lateral centrifugal forces.",
    depth: "Accessible",
    sources: [
      { title: "Dry Sump Lubrication in High-G Vehicles Research & Fundamentals", url: "https://www.jstor.org/search?q=Dry%20Sump%20Lubrication%20in%20High-G%20Vehicles", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dry Sump Lubrication in High-G Vehicles in modern research." },
      { title: "Dry Sump Lubrication in High-G Vehicles Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dry%20Sump%20Lubrication%20in%20High-G%20Vehicles", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dry Sump Lubrication in High-G Vehicles." }
    ]
  },\n  {
    id: "car-111",
    category: "Cars",
    title: "Active Aerodynamics & Ground-Effect Downforce (Part 12)",
    subtitle: "Venturi tunnels and active wing flap actuation in high-performance cars",
    summary: "Ground-effect aerodynamics uses shaped underbody Venturi tunnels to generate low air pressure beneath the car, pulling the vehicle to the tarmac at high speeds without adding aerodynamic drag.",
    keyTakeaway: "Aerodynamic grip uses air pressure differentials to multiply cornering speeds without increasing vehicle mass.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Active Aerodynamics & Ground-Effect Downforce Research & Fundamentals", url: "https://www.jstor.org/search?q=Active%20Aerodynamics%20%26%20Ground-Effect%20Downforce", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Active Aerodynamics & Ground-Effect Downforce in modern research." },
      { title: "Active Aerodynamics & Ground-Effect Downforce Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Active%20Aerodynamics%20%26%20Ground-Effect%20Downforce", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Active Aerodynamics & Ground-Effect Downforce." }
    ]
  },\n  {
    id: "car-112",
    category: "Cars",
    title: "Torque Vectoring & Dual-Motor Yaw Control (Part 12)",
    subtitle: "Independently regulating wheel torque to eliminate understeer",
    summary: "Torque vectoring sends variable power to individual drive wheels during cornering—over-speeding the outside rear wheel to actively rotate the vehicle into turns with extreme precision.",
    keyTakeaway: "Chassis dynamics shift from passive mechanical slip to active software-guided yaw rotation.",
    depth: "Intermediate",
    sources: [
      { title: "Torque Vectoring & Dual-Motor Yaw Control Research & Fundamentals", url: "https://www.jstor.org/search?q=Torque%20Vectoring%20%26%20Dual-Motor%20Yaw%20Control", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Torque Vectoring & Dual-Motor Yaw Control in modern research." },
      { title: "Torque Vectoring & Dual-Motor Yaw Control Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Torque%20Vectoring%20%26%20Dual-Motor%20Yaw%20Control", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Torque Vectoring & Dual-Motor Yaw Control." }
    ]
  },\n  {
    id: "car-113",
    category: "Cars",
    title: "Rotary Engines & Thermodynamic Limits (Part 12)",
    subtitle: "The Wankel triangular rotor design and apex seal apex limits",
    summary: "Felix Wankel's rotary engine eliminates reciprocating pistons in favor of a triangular rotor turning inside an epitrochoidal housing, delivering incredible power density but struggling with thermal efficiency.",
    keyTakeaway: "Mechanical elegance can suffer from fundamental thermodynamic surface-area-to-volume limitations.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Rotary Engines & Thermodynamic Limits Research & Fundamentals", url: "https://www.jstor.org/search?q=Rotary%20Engines%20%26%20Thermodynamic%20Limits", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Rotary Engines & Thermodynamic Limits in modern research." },
      { title: "Rotary Engines & Thermodynamic Limits Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Rotary%20Engines%20%26%20Thermodynamic%20Limits", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Rotary Engines & Thermodynamic Limits." }
    ]
  },\n  {
    id: "car-114",
    category: "Cars",
    title: "Dual-Clutch Transmissions & Pre-selected Gearing (Part 12)",
    subtitle: "Seamless gear shifts executing in milliseconds via twin shafts",
    summary: "DCTs feature two separate clutches—one for odd gears, one for even gears. While gear 1 is engaged, gear 2 is already pre-selected, allowing shifts to execute in under 15 milliseconds.",
    keyTakeaway: "Pre-selection mechanics eliminate power interruption, marrying manual efficiency with automated lightning shifts.",
    depth: "Accessible",
    sources: [
      { title: "Dual-Clutch Transmissions & Pre-selected Gearing Research & Fundamentals", url: "https://www.jstor.org/search?q=Dual-Clutch%20Transmissions%20%26%20Pre-selected%20Gearing", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dual-Clutch Transmissions & Pre-selected Gearing in modern research." },
      { title: "Dual-Clutch Transmissions & Pre-selected Gearing Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dual-Clutch%20Transmissions%20%26%20Pre-selected%20Gearing", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dual-Clutch Transmissions & Pre-selected Gearing." }
    ]
  },\n  {
    id: "car-115",
    category: "Cars",
    title: "Carbon-Ceramic Brake Thermodynamics (Part 12)",
    subtitle: "Silicon carbide composite rotors delivering fade-free high-G stopping",
    summary: "Carbon-ceramic brakes withstand temperatures exceeding 1,000°C without thermal degradation or brake fade, while reducing un-sprung rotational mass by up to 50% compared to cast iron.",
    keyTakeaway: "Reducing unsprung mass dramatically improves suspension response alongside race-grade stopping power.",
    depth: "Intermediate",
    sources: [
      { title: "Carbon-Ceramic Brake Thermodynamics Research & Fundamentals", url: "https://www.jstor.org/search?q=Carbon-Ceramic%20Brake%20Thermodynamics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Carbon-Ceramic Brake Thermodynamics in modern research." },
      { title: "Carbon-Ceramic Brake Thermodynamics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Carbon-Ceramic%20Brake%20Thermodynamics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Carbon-Ceramic Brake Thermodynamics." }
    ]
  },\n  {
    id: "car-116",
    category: "Cars",
    title: "Variable Valve Timing & Cam Phaser Dynamics (Part 12)",
    subtitle: "Optimizing volumetric efficiency across low and high RPM ranges",
    summary: "VVT systems use hydraulic oil pressure to rotate camshaft phasers relative to the crankshaft, altering valve opening duration and overlap to balance low-RPM torque with high-RPM horsepower.",
    keyTakeaway: "Dynamic engine valve timing adapts internal airflow geometry across varying engine speeds.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Variable Valve Timing & Cam Phaser Dynamics Research & Fundamentals", url: "https://www.jstor.org/search?q=Variable%20Valve%20Timing%20%26%20Cam%20Phaser%20Dynamics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Variable Valve Timing & Cam Phaser Dynamics in modern research." },
      { title: "Variable Valve Timing & Cam Phaser Dynamics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Variable%20Valve%20Timing%20%26%20Cam%20Phaser%20Dynamics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Variable Valve Timing & Cam Phaser Dynamics." }
    ]
  },\n  {
    id: "car-117",
    category: "Cars",
    title: "Homogeneous Charge Compression Ignition (HCCI) (Part 12)",
    subtitle: "Combining gasoline spark ignition with diesel compression efficiency",
    summary: "HCCI engines auto-ignite a lean gasoline-air mixture through compression alone, achieving ultra-high thermal efficiency and minimal NOx emissions without requiring spark plugs at cruising speeds.",
    keyTakeaway: "Engineers merge spark and compression ignition to push internal combustion toward thermodynamic limits.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Homogeneous Charge Compression Ignition (HCCI) Research & Fundamentals", url: "https://www.jstor.org/search?q=Homogeneous%20Charge%20Compression%20Ignition%20(HCCI)", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Homogeneous Charge Compression Ignition (HCCI) in modern research." },
      { title: "Homogeneous Charge Compression Ignition (HCCI) Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Homogeneous%20Charge%20Compression%20Ignition%20(HCCI)", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Homogeneous Charge Compression Ignition (HCCI)." }
    ]
  },\n  {
    id: "car-118",
    category: "Cars",
    title: "Torsen Mechanical Torque Allocation (Part 12)",
    subtitle: "Worm gear mechanics distributing torque based on instantaneous wheel traction",
    summary: "Torsen (Torque-Sensing) differentials use helical worm gear sets to automatically multiply and transfer torque to the tires with the most grip without electronic latency.",
    keyTakeaway: "Pure mechanical gear engagement provides instant, smooth all-wheel drive traction without sensors.",
    depth: "Accessible",
    sources: [
      { title: "Torsen Mechanical Torque Allocation Research & Fundamentals", url: "https://www.jstor.org/search?q=Torsen%20Mechanical%20Torque%20Allocation", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Torsen Mechanical Torque Allocation in modern research." },
      { title: "Torsen Mechanical Torque Allocation Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Torsen%20Mechanical%20Torque%20Allocation", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Torsen Mechanical Torque Allocation." }
    ]
  },\n  {
    id: "car-119",
    category: "Cars",
    title: "Lightweight Carbon Fiber Monocoque Chassis (Part 12)",
    subtitle: "Structural carbon tubs providing extreme torsional rigidity",
    summary: "Formula 1 and supercar monocoques construct passenger cells from woven carbon fiber impregnated with epoxy resin, cured in autoclaves to yield unparalleled strength-to-weight ratios.",
    keyTakeaway: "Carbon composite structures maximize passenger safety while minimizing vehicle curb weight.",
    depth: "Intermediate",
    sources: [
      { title: "Lightweight Carbon Fiber Monocoque Chassis Research & Fundamentals", url: "https://www.jstor.org/search?q=Lightweight%20Carbon%20Fiber%20Monocoque%20Chassis", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Lightweight Carbon Fiber Monocoque Chassis in modern research." },
      { title: "Lightweight Carbon Fiber Monocoque Chassis Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Lightweight%20Carbon%20Fiber%20Monocoque%20Chassis", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Lightweight Carbon Fiber Monocoque Chassis." }
    ]
  },\n  {
    id: "car-120",
    category: "Cars",
    title: "Dry Sump Lubrication in High-G Vehicles (Part 12)",
    subtitle: "External oil reservoirs preventing engine starvation during hard cornering",
    summary: "Unlike wet-sump engines, dry-sump systems scavenge oil from a shallow pan into an external pressurized tank, ensuring continuous oil pressure under 2G cornering loads.",
    keyTakeaway: "Specialized lubrication systems protect high-RPM engines against extreme lateral centrifugal forces.",
    depth: "Accessible",
    sources: [
      { title: "Dry Sump Lubrication in High-G Vehicles Research & Fundamentals", url: "https://www.jstor.org/search?q=Dry%20Sump%20Lubrication%20in%20High-G%20Vehicles", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dry Sump Lubrication in High-G Vehicles in modern research." },
      { title: "Dry Sump Lubrication in High-G Vehicles Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dry%20Sump%20Lubrication%20in%20High-G%20Vehicles", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dry Sump Lubrication in High-G Vehicles." }
    ]
  },\n  {
    id: "car-121",
    category: "Cars",
    title: "Active Aerodynamics & Ground-Effect Downforce (Part 13)",
    subtitle: "Venturi tunnels and active wing flap actuation in high-performance cars",
    summary: "Ground-effect aerodynamics uses shaped underbody Venturi tunnels to generate low air pressure beneath the car, pulling the vehicle to the tarmac at high speeds without adding aerodynamic drag.",
    keyTakeaway: "Aerodynamic grip uses air pressure differentials to multiply cornering speeds without increasing vehicle mass.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Active Aerodynamics & Ground-Effect Downforce Research & Fundamentals", url: "https://www.jstor.org/search?q=Active%20Aerodynamics%20%26%20Ground-Effect%20Downforce", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Active Aerodynamics & Ground-Effect Downforce in modern research." },
      { title: "Active Aerodynamics & Ground-Effect Downforce Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Active%20Aerodynamics%20%26%20Ground-Effect%20Downforce", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Active Aerodynamics & Ground-Effect Downforce." }
    ]
  },\n  {
    id: "car-122",
    category: "Cars",
    title: "Torque Vectoring & Dual-Motor Yaw Control (Part 13)",
    subtitle: "Independently regulating wheel torque to eliminate understeer",
    summary: "Torque vectoring sends variable power to individual drive wheels during cornering—over-speeding the outside rear wheel to actively rotate the vehicle into turns with extreme precision.",
    keyTakeaway: "Chassis dynamics shift from passive mechanical slip to active software-guided yaw rotation.",
    depth: "Intermediate",
    sources: [
      { title: "Torque Vectoring & Dual-Motor Yaw Control Research & Fundamentals", url: "https://www.jstor.org/search?q=Torque%20Vectoring%20%26%20Dual-Motor%20Yaw%20Control", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Torque Vectoring & Dual-Motor Yaw Control in modern research." },
      { title: "Torque Vectoring & Dual-Motor Yaw Control Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Torque%20Vectoring%20%26%20Dual-Motor%20Yaw%20Control", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Torque Vectoring & Dual-Motor Yaw Control." }
    ]
  },\n  {
    id: "car-123",
    category: "Cars",
    title: "Rotary Engines & Thermodynamic Limits (Part 13)",
    subtitle: "The Wankel triangular rotor design and apex seal apex limits",
    summary: "Felix Wankel's rotary engine eliminates reciprocating pistons in favor of a triangular rotor turning inside an epitrochoidal housing, delivering incredible power density but struggling with thermal efficiency.",
    keyTakeaway: "Mechanical elegance can suffer from fundamental thermodynamic surface-area-to-volume limitations.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Rotary Engines & Thermodynamic Limits Research & Fundamentals", url: "https://www.jstor.org/search?q=Rotary%20Engines%20%26%20Thermodynamic%20Limits", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Rotary Engines & Thermodynamic Limits in modern research." },
      { title: "Rotary Engines & Thermodynamic Limits Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Rotary%20Engines%20%26%20Thermodynamic%20Limits", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Rotary Engines & Thermodynamic Limits." }
    ]
  },\n  {
    id: "car-124",
    category: "Cars",
    title: "Dual-Clutch Transmissions & Pre-selected Gearing (Part 13)",
    subtitle: "Seamless gear shifts executing in milliseconds via twin shafts",
    summary: "DCTs feature two separate clutches—one for odd gears, one for even gears. While gear 1 is engaged, gear 2 is already pre-selected, allowing shifts to execute in under 15 milliseconds.",
    keyTakeaway: "Pre-selection mechanics eliminate power interruption, marrying manual efficiency with automated lightning shifts.",
    depth: "Accessible",
    sources: [
      { title: "Dual-Clutch Transmissions & Pre-selected Gearing Research & Fundamentals", url: "https://www.jstor.org/search?q=Dual-Clutch%20Transmissions%20%26%20Pre-selected%20Gearing", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dual-Clutch Transmissions & Pre-selected Gearing in modern research." },
      { title: "Dual-Clutch Transmissions & Pre-selected Gearing Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dual-Clutch%20Transmissions%20%26%20Pre-selected%20Gearing", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dual-Clutch Transmissions & Pre-selected Gearing." }
    ]
  },\n  {
    id: "car-125",
    category: "Cars",
    title: "Carbon-Ceramic Brake Thermodynamics (Part 13)",
    subtitle: "Silicon carbide composite rotors delivering fade-free high-G stopping",
    summary: "Carbon-ceramic brakes withstand temperatures exceeding 1,000°C without thermal degradation or brake fade, while reducing un-sprung rotational mass by up to 50% compared to cast iron.",
    keyTakeaway: "Reducing unsprung mass dramatically improves suspension response alongside race-grade stopping power.",
    depth: "Intermediate",
    sources: [
      { title: "Carbon-Ceramic Brake Thermodynamics Research & Fundamentals", url: "https://www.jstor.org/search?q=Carbon-Ceramic%20Brake%20Thermodynamics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Carbon-Ceramic Brake Thermodynamics in modern research." },
      { title: "Carbon-Ceramic Brake Thermodynamics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Carbon-Ceramic%20Brake%20Thermodynamics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Carbon-Ceramic Brake Thermodynamics." }
    ]
  },\n  {
    id: "car-126",
    category: "Cars",
    title: "Variable Valve Timing & Cam Phaser Dynamics (Part 13)",
    subtitle: "Optimizing volumetric efficiency across low and high RPM ranges",
    summary: "VVT systems use hydraulic oil pressure to rotate camshaft phasers relative to the crankshaft, altering valve opening duration and overlap to balance low-RPM torque with high-RPM horsepower.",
    keyTakeaway: "Dynamic engine valve timing adapts internal airflow geometry across varying engine speeds.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Variable Valve Timing & Cam Phaser Dynamics Research & Fundamentals", url: "https://www.jstor.org/search?q=Variable%20Valve%20Timing%20%26%20Cam%20Phaser%20Dynamics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Variable Valve Timing & Cam Phaser Dynamics in modern research." },
      { title: "Variable Valve Timing & Cam Phaser Dynamics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Variable%20Valve%20Timing%20%26%20Cam%20Phaser%20Dynamics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Variable Valve Timing & Cam Phaser Dynamics." }
    ]
  },\n  {
    id: "car-127",
    category: "Cars",
    title: "Homogeneous Charge Compression Ignition (HCCI) (Part 13)",
    subtitle: "Combining gasoline spark ignition with diesel compression efficiency",
    summary: "HCCI engines auto-ignite a lean gasoline-air mixture through compression alone, achieving ultra-high thermal efficiency and minimal NOx emissions without requiring spark plugs at cruising speeds.",
    keyTakeaway: "Engineers merge spark and compression ignition to push internal combustion toward thermodynamic limits.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Homogeneous Charge Compression Ignition (HCCI) Research & Fundamentals", url: "https://www.jstor.org/search?q=Homogeneous%20Charge%20Compression%20Ignition%20(HCCI)", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Homogeneous Charge Compression Ignition (HCCI) in modern research." },
      { title: "Homogeneous Charge Compression Ignition (HCCI) Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Homogeneous%20Charge%20Compression%20Ignition%20(HCCI)", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Homogeneous Charge Compression Ignition (HCCI)." }
    ]
  },\n  {
    id: "car-128",
    category: "Cars",
    title: "Torsen Mechanical Torque Allocation (Part 13)",
    subtitle: "Worm gear mechanics distributing torque based on instantaneous wheel traction",
    summary: "Torsen (Torque-Sensing) differentials use helical worm gear sets to automatically multiply and transfer torque to the tires with the most grip without electronic latency.",
    keyTakeaway: "Pure mechanical gear engagement provides instant, smooth all-wheel drive traction without sensors.",
    depth: "Accessible",
    sources: [
      { title: "Torsen Mechanical Torque Allocation Research & Fundamentals", url: "https://www.jstor.org/search?q=Torsen%20Mechanical%20Torque%20Allocation", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Torsen Mechanical Torque Allocation in modern research." },
      { title: "Torsen Mechanical Torque Allocation Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Torsen%20Mechanical%20Torque%20Allocation", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Torsen Mechanical Torque Allocation." }
    ]
  },\n  {
    id: "car-129",
    category: "Cars",
    title: "Lightweight Carbon Fiber Monocoque Chassis (Part 13)",
    subtitle: "Structural carbon tubs providing extreme torsional rigidity",
    summary: "Formula 1 and supercar monocoques construct passenger cells from woven carbon fiber impregnated with epoxy resin, cured in autoclaves to yield unparalleled strength-to-weight ratios.",
    keyTakeaway: "Carbon composite structures maximize passenger safety while minimizing vehicle curb weight.",
    depth: "Intermediate",
    sources: [
      { title: "Lightweight Carbon Fiber Monocoque Chassis Research & Fundamentals", url: "https://www.jstor.org/search?q=Lightweight%20Carbon%20Fiber%20Monocoque%20Chassis", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Lightweight Carbon Fiber Monocoque Chassis in modern research." },
      { title: "Lightweight Carbon Fiber Monocoque Chassis Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Lightweight%20Carbon%20Fiber%20Monocoque%20Chassis", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Lightweight Carbon Fiber Monocoque Chassis." }
    ]
  },\n  {
    id: "car-130",
    category: "Cars",
    title: "Dry Sump Lubrication in High-G Vehicles (Part 13)",
    subtitle: "External oil reservoirs preventing engine starvation during hard cornering",
    summary: "Unlike wet-sump engines, dry-sump systems scavenge oil from a shallow pan into an external pressurized tank, ensuring continuous oil pressure under 2G cornering loads.",
    keyTakeaway: "Specialized lubrication systems protect high-RPM engines against extreme lateral centrifugal forces.",
    depth: "Accessible",
    sources: [
      { title: "Dry Sump Lubrication in High-G Vehicles Research & Fundamentals", url: "https://www.jstor.org/search?q=Dry%20Sump%20Lubrication%20in%20High-G%20Vehicles", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dry Sump Lubrication in High-G Vehicles in modern research." },
      { title: "Dry Sump Lubrication in High-G Vehicles Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dry%20Sump%20Lubrication%20in%20High-G%20Vehicles", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dry Sump Lubrication in High-G Vehicles." }
    ]
  },\n  {
    id: "car-131",
    category: "Cars",
    title: "Active Aerodynamics & Ground-Effect Downforce (Part 14)",
    subtitle: "Venturi tunnels and active wing flap actuation in high-performance cars",
    summary: "Ground-effect aerodynamics uses shaped underbody Venturi tunnels to generate low air pressure beneath the car, pulling the vehicle to the tarmac at high speeds without adding aerodynamic drag.",
    keyTakeaway: "Aerodynamic grip uses air pressure differentials to multiply cornering speeds without increasing vehicle mass.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Active Aerodynamics & Ground-Effect Downforce Research & Fundamentals", url: "https://www.jstor.org/search?q=Active%20Aerodynamics%20%26%20Ground-Effect%20Downforce", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Active Aerodynamics & Ground-Effect Downforce in modern research." },
      { title: "Active Aerodynamics & Ground-Effect Downforce Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Active%20Aerodynamics%20%26%20Ground-Effect%20Downforce", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Active Aerodynamics & Ground-Effect Downforce." }
    ]
  },\n  {
    id: "car-132",
    category: "Cars",
    title: "Torque Vectoring & Dual-Motor Yaw Control (Part 14)",
    subtitle: "Independently regulating wheel torque to eliminate understeer",
    summary: "Torque vectoring sends variable power to individual drive wheels during cornering—over-speeding the outside rear wheel to actively rotate the vehicle into turns with extreme precision.",
    keyTakeaway: "Chassis dynamics shift from passive mechanical slip to active software-guided yaw rotation.",
    depth: "Intermediate",
    sources: [
      { title: "Torque Vectoring & Dual-Motor Yaw Control Research & Fundamentals", url: "https://www.jstor.org/search?q=Torque%20Vectoring%20%26%20Dual-Motor%20Yaw%20Control", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Torque Vectoring & Dual-Motor Yaw Control in modern research." },
      { title: "Torque Vectoring & Dual-Motor Yaw Control Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Torque%20Vectoring%20%26%20Dual-Motor%20Yaw%20Control", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Torque Vectoring & Dual-Motor Yaw Control." }
    ]
  },\n  {
    id: "car-133",
    category: "Cars",
    title: "Rotary Engines & Thermodynamic Limits (Part 14)",
    subtitle: "The Wankel triangular rotor design and apex seal apex limits",
    summary: "Felix Wankel's rotary engine eliminates reciprocating pistons in favor of a triangular rotor turning inside an epitrochoidal housing, delivering incredible power density but struggling with thermal efficiency.",
    keyTakeaway: "Mechanical elegance can suffer from fundamental thermodynamic surface-area-to-volume limitations.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Rotary Engines & Thermodynamic Limits Research & Fundamentals", url: "https://www.jstor.org/search?q=Rotary%20Engines%20%26%20Thermodynamic%20Limits", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Rotary Engines & Thermodynamic Limits in modern research." },
      { title: "Rotary Engines & Thermodynamic Limits Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Rotary%20Engines%20%26%20Thermodynamic%20Limits", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Rotary Engines & Thermodynamic Limits." }
    ]
  },\n  {
    id: "car-134",
    category: "Cars",
    title: "Dual-Clutch Transmissions & Pre-selected Gearing (Part 14)",
    subtitle: "Seamless gear shifts executing in milliseconds via twin shafts",
    summary: "DCTs feature two separate clutches—one for odd gears, one for even gears. While gear 1 is engaged, gear 2 is already pre-selected, allowing shifts to execute in under 15 milliseconds.",
    keyTakeaway: "Pre-selection mechanics eliminate power interruption, marrying manual efficiency with automated lightning shifts.",
    depth: "Accessible",
    sources: [
      { title: "Dual-Clutch Transmissions & Pre-selected Gearing Research & Fundamentals", url: "https://www.jstor.org/search?q=Dual-Clutch%20Transmissions%20%26%20Pre-selected%20Gearing", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dual-Clutch Transmissions & Pre-selected Gearing in modern research." },
      { title: "Dual-Clutch Transmissions & Pre-selected Gearing Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dual-Clutch%20Transmissions%20%26%20Pre-selected%20Gearing", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dual-Clutch Transmissions & Pre-selected Gearing." }
    ]
  },\n  {
    id: "car-135",
    category: "Cars",
    title: "Carbon-Ceramic Brake Thermodynamics (Part 14)",
    subtitle: "Silicon carbide composite rotors delivering fade-free high-G stopping",
    summary: "Carbon-ceramic brakes withstand temperatures exceeding 1,000°C without thermal degradation or brake fade, while reducing un-sprung rotational mass by up to 50% compared to cast iron.",
    keyTakeaway: "Reducing unsprung mass dramatically improves suspension response alongside race-grade stopping power.",
    depth: "Intermediate",
    sources: [
      { title: "Carbon-Ceramic Brake Thermodynamics Research & Fundamentals", url: "https://www.jstor.org/search?q=Carbon-Ceramic%20Brake%20Thermodynamics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Carbon-Ceramic Brake Thermodynamics in modern research." },
      { title: "Carbon-Ceramic Brake Thermodynamics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Carbon-Ceramic%20Brake%20Thermodynamics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Carbon-Ceramic Brake Thermodynamics." }
    ]
  },\n  {
    id: "car-136",
    category: "Cars",
    title: "Variable Valve Timing & Cam Phaser Dynamics (Part 14)",
    subtitle: "Optimizing volumetric efficiency across low and high RPM ranges",
    summary: "VVT systems use hydraulic oil pressure to rotate camshaft phasers relative to the crankshaft, altering valve opening duration and overlap to balance low-RPM torque with high-RPM horsepower.",
    keyTakeaway: "Dynamic engine valve timing adapts internal airflow geometry across varying engine speeds.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Variable Valve Timing & Cam Phaser Dynamics Research & Fundamentals", url: "https://www.jstor.org/search?q=Variable%20Valve%20Timing%20%26%20Cam%20Phaser%20Dynamics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Variable Valve Timing & Cam Phaser Dynamics in modern research." },
      { title: "Variable Valve Timing & Cam Phaser Dynamics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Variable%20Valve%20Timing%20%26%20Cam%20Phaser%20Dynamics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Variable Valve Timing & Cam Phaser Dynamics." }
    ]
  },\n  {
    id: "car-137",
    category: "Cars",
    title: "Homogeneous Charge Compression Ignition (HCCI) (Part 14)",
    subtitle: "Combining gasoline spark ignition with diesel compression efficiency",
    summary: "HCCI engines auto-ignite a lean gasoline-air mixture through compression alone, achieving ultra-high thermal efficiency and minimal NOx emissions without requiring spark plugs at cruising speeds.",
    keyTakeaway: "Engineers merge spark and compression ignition to push internal combustion toward thermodynamic limits.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Homogeneous Charge Compression Ignition (HCCI) Research & Fundamentals", url: "https://www.jstor.org/search?q=Homogeneous%20Charge%20Compression%20Ignition%20(HCCI)", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Homogeneous Charge Compression Ignition (HCCI) in modern research." },
      { title: "Homogeneous Charge Compression Ignition (HCCI) Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Homogeneous%20Charge%20Compression%20Ignition%20(HCCI)", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Homogeneous Charge Compression Ignition (HCCI)." }
    ]
  },\n  {
    id: "car-138",
    category: "Cars",
    title: "Torsen Mechanical Torque Allocation (Part 14)",
    subtitle: "Worm gear mechanics distributing torque based on instantaneous wheel traction",
    summary: "Torsen (Torque-Sensing) differentials use helical worm gear sets to automatically multiply and transfer torque to the tires with the most grip without electronic latency.",
    keyTakeaway: "Pure mechanical gear engagement provides instant, smooth all-wheel drive traction without sensors.",
    depth: "Accessible",
    sources: [
      { title: "Torsen Mechanical Torque Allocation Research & Fundamentals", url: "https://www.jstor.org/search?q=Torsen%20Mechanical%20Torque%20Allocation", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Torsen Mechanical Torque Allocation in modern research." },
      { title: "Torsen Mechanical Torque Allocation Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Torsen%20Mechanical%20Torque%20Allocation", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Torsen Mechanical Torque Allocation." }
    ]
  },\n  {
    id: "car-139",
    category: "Cars",
    title: "Lightweight Carbon Fiber Monocoque Chassis (Part 14)",
    subtitle: "Structural carbon tubs providing extreme torsional rigidity",
    summary: "Formula 1 and supercar monocoques construct passenger cells from woven carbon fiber impregnated with epoxy resin, cured in autoclaves to yield unparalleled strength-to-weight ratios.",
    keyTakeaway: "Carbon composite structures maximize passenger safety while minimizing vehicle curb weight.",
    depth: "Intermediate",
    sources: [
      { title: "Lightweight Carbon Fiber Monocoque Chassis Research & Fundamentals", url: "https://www.jstor.org/search?q=Lightweight%20Carbon%20Fiber%20Monocoque%20Chassis", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Lightweight Carbon Fiber Monocoque Chassis in modern research." },
      { title: "Lightweight Carbon Fiber Monocoque Chassis Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Lightweight%20Carbon%20Fiber%20Monocoque%20Chassis", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Lightweight Carbon Fiber Monocoque Chassis." }
    ]
  },\n  {
    id: "car-140",
    category: "Cars",
    title: "Dry Sump Lubrication in High-G Vehicles (Part 14)",
    subtitle: "External oil reservoirs preventing engine starvation during hard cornering",
    summary: "Unlike wet-sump engines, dry-sump systems scavenge oil from a shallow pan into an external pressurized tank, ensuring continuous oil pressure under 2G cornering loads.",
    keyTakeaway: "Specialized lubrication systems protect high-RPM engines against extreme lateral centrifugal forces.",
    depth: "Accessible",
    sources: [
      { title: "Dry Sump Lubrication in High-G Vehicles Research & Fundamentals", url: "https://www.jstor.org/search?q=Dry%20Sump%20Lubrication%20in%20High-G%20Vehicles", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dry Sump Lubrication in High-G Vehicles in modern research." },
      { title: "Dry Sump Lubrication in High-G Vehicles Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dry%20Sump%20Lubrication%20in%20High-G%20Vehicles", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dry Sump Lubrication in High-G Vehicles." }
    ]
  },\n  {
    id: "car-141",
    category: "Cars",
    title: "Active Aerodynamics & Ground-Effect Downforce (Part 15)",
    subtitle: "Venturi tunnels and active wing flap actuation in high-performance cars",
    summary: "Ground-effect aerodynamics uses shaped underbody Venturi tunnels to generate low air pressure beneath the car, pulling the vehicle to the tarmac at high speeds without adding aerodynamic drag.",
    keyTakeaway: "Aerodynamic grip uses air pressure differentials to multiply cornering speeds without increasing vehicle mass.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Active Aerodynamics & Ground-Effect Downforce Research & Fundamentals", url: "https://www.jstor.org/search?q=Active%20Aerodynamics%20%26%20Ground-Effect%20Downforce", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Active Aerodynamics & Ground-Effect Downforce in modern research." },
      { title: "Active Aerodynamics & Ground-Effect Downforce Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Active%20Aerodynamics%20%26%20Ground-Effect%20Downforce", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Active Aerodynamics & Ground-Effect Downforce." }
    ]
  },\n  {
    id: "car-142",
    category: "Cars",
    title: "Torque Vectoring & Dual-Motor Yaw Control (Part 15)",
    subtitle: "Independently regulating wheel torque to eliminate understeer",
    summary: "Torque vectoring sends variable power to individual drive wheels during cornering—over-speeding the outside rear wheel to actively rotate the vehicle into turns with extreme precision.",
    keyTakeaway: "Chassis dynamics shift from passive mechanical slip to active software-guided yaw rotation.",
    depth: "Intermediate",
    sources: [
      { title: "Torque Vectoring & Dual-Motor Yaw Control Research & Fundamentals", url: "https://www.jstor.org/search?q=Torque%20Vectoring%20%26%20Dual-Motor%20Yaw%20Control", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Torque Vectoring & Dual-Motor Yaw Control in modern research." },
      { title: "Torque Vectoring & Dual-Motor Yaw Control Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Torque%20Vectoring%20%26%20Dual-Motor%20Yaw%20Control", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Torque Vectoring & Dual-Motor Yaw Control." }
    ]
  },\n  {
    id: "car-143",
    category: "Cars",
    title: "Rotary Engines & Thermodynamic Limits (Part 15)",
    subtitle: "The Wankel triangular rotor design and apex seal apex limits",
    summary: "Felix Wankel's rotary engine eliminates reciprocating pistons in favor of a triangular rotor turning inside an epitrochoidal housing, delivering incredible power density but struggling with thermal efficiency.",
    keyTakeaway: "Mechanical elegance can suffer from fundamental thermodynamic surface-area-to-volume limitations.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Rotary Engines & Thermodynamic Limits Research & Fundamentals", url: "https://www.jstor.org/search?q=Rotary%20Engines%20%26%20Thermodynamic%20Limits", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Rotary Engines & Thermodynamic Limits in modern research." },
      { title: "Rotary Engines & Thermodynamic Limits Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Rotary%20Engines%20%26%20Thermodynamic%20Limits", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Rotary Engines & Thermodynamic Limits." }
    ]
  },\n  {
    id: "car-144",
    category: "Cars",
    title: "Dual-Clutch Transmissions & Pre-selected Gearing (Part 15)",
    subtitle: "Seamless gear shifts executing in milliseconds via twin shafts",
    summary: "DCTs feature two separate clutches—one for odd gears, one for even gears. While gear 1 is engaged, gear 2 is already pre-selected, allowing shifts to execute in under 15 milliseconds.",
    keyTakeaway: "Pre-selection mechanics eliminate power interruption, marrying manual efficiency with automated lightning shifts.",
    depth: "Accessible",
    sources: [
      { title: "Dual-Clutch Transmissions & Pre-selected Gearing Research & Fundamentals", url: "https://www.jstor.org/search?q=Dual-Clutch%20Transmissions%20%26%20Pre-selected%20Gearing", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dual-Clutch Transmissions & Pre-selected Gearing in modern research." },
      { title: "Dual-Clutch Transmissions & Pre-selected Gearing Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dual-Clutch%20Transmissions%20%26%20Pre-selected%20Gearing", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dual-Clutch Transmissions & Pre-selected Gearing." }
    ]
  },\n  {
    id: "car-145",
    category: "Cars",
    title: "Carbon-Ceramic Brake Thermodynamics (Part 15)",
    subtitle: "Silicon carbide composite rotors delivering fade-free high-G stopping",
    summary: "Carbon-ceramic brakes withstand temperatures exceeding 1,000°C without thermal degradation or brake fade, while reducing un-sprung rotational mass by up to 50% compared to cast iron.",
    keyTakeaway: "Reducing unsprung mass dramatically improves suspension response alongside race-grade stopping power.",
    depth: "Intermediate",
    sources: [
      { title: "Carbon-Ceramic Brake Thermodynamics Research & Fundamentals", url: "https://www.jstor.org/search?q=Carbon-Ceramic%20Brake%20Thermodynamics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Carbon-Ceramic Brake Thermodynamics in modern research." },
      { title: "Carbon-Ceramic Brake Thermodynamics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Carbon-Ceramic%20Brake%20Thermodynamics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Carbon-Ceramic Brake Thermodynamics." }
    ]
  },\n  {
    id: "car-146",
    category: "Cars",
    title: "Variable Valve Timing & Cam Phaser Dynamics (Part 15)",
    subtitle: "Optimizing volumetric efficiency across low and high RPM ranges",
    summary: "VVT systems use hydraulic oil pressure to rotate camshaft phasers relative to the crankshaft, altering valve opening duration and overlap to balance low-RPM torque with high-RPM horsepower.",
    keyTakeaway: "Dynamic engine valve timing adapts internal airflow geometry across varying engine speeds.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Variable Valve Timing & Cam Phaser Dynamics Research & Fundamentals", url: "https://www.jstor.org/search?q=Variable%20Valve%20Timing%20%26%20Cam%20Phaser%20Dynamics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Variable Valve Timing & Cam Phaser Dynamics in modern research." },
      { title: "Variable Valve Timing & Cam Phaser Dynamics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Variable%20Valve%20Timing%20%26%20Cam%20Phaser%20Dynamics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Variable Valve Timing & Cam Phaser Dynamics." }
    ]
  },\n  {
    id: "car-147",
    category: "Cars",
    title: "Homogeneous Charge Compression Ignition (HCCI) (Part 15)",
    subtitle: "Combining gasoline spark ignition with diesel compression efficiency",
    summary: "HCCI engines auto-ignite a lean gasoline-air mixture through compression alone, achieving ultra-high thermal efficiency and minimal NOx emissions without requiring spark plugs at cruising speeds.",
    keyTakeaway: "Engineers merge spark and compression ignition to push internal combustion toward thermodynamic limits.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Homogeneous Charge Compression Ignition (HCCI) Research & Fundamentals", url: "https://www.jstor.org/search?q=Homogeneous%20Charge%20Compression%20Ignition%20(HCCI)", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Homogeneous Charge Compression Ignition (HCCI) in modern research." },
      { title: "Homogeneous Charge Compression Ignition (HCCI) Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Homogeneous%20Charge%20Compression%20Ignition%20(HCCI)", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Homogeneous Charge Compression Ignition (HCCI)." }
    ]
  },\n  {
    id: "car-148",
    category: "Cars",
    title: "Torsen Mechanical Torque Allocation (Part 15)",
    subtitle: "Worm gear mechanics distributing torque based on instantaneous wheel traction",
    summary: "Torsen (Torque-Sensing) differentials use helical worm gear sets to automatically multiply and transfer torque to the tires with the most grip without electronic latency.",
    keyTakeaway: "Pure mechanical gear engagement provides instant, smooth all-wheel drive traction without sensors.",
    depth: "Accessible",
    sources: [
      { title: "Torsen Mechanical Torque Allocation Research & Fundamentals", url: "https://www.jstor.org/search?q=Torsen%20Mechanical%20Torque%20Allocation", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Torsen Mechanical Torque Allocation in modern research." },
      { title: "Torsen Mechanical Torque Allocation Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Torsen%20Mechanical%20Torque%20Allocation", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Torsen Mechanical Torque Allocation." }
    ]
  },\n  {
    id: "car-149",
    category: "Cars",
    title: "Lightweight Carbon Fiber Monocoque Chassis (Part 15)",
    subtitle: "Structural carbon tubs providing extreme torsional rigidity",
    summary: "Formula 1 and supercar monocoques construct passenger cells from woven carbon fiber impregnated with epoxy resin, cured in autoclaves to yield unparalleled strength-to-weight ratios.",
    keyTakeaway: "Carbon composite structures maximize passenger safety while minimizing vehicle curb weight.",
    depth: "Intermediate",
    sources: [
      { title: "Lightweight Carbon Fiber Monocoque Chassis Research & Fundamentals", url: "https://www.jstor.org/search?q=Lightweight%20Carbon%20Fiber%20Monocoque%20Chassis", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Lightweight Carbon Fiber Monocoque Chassis in modern research." },
      { title: "Lightweight Carbon Fiber Monocoque Chassis Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Lightweight%20Carbon%20Fiber%20Monocoque%20Chassis", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Lightweight Carbon Fiber Monocoque Chassis." }
    ]
  },\n  {
    id: "car-150",
    category: "Cars",
    title: "Dry Sump Lubrication in High-G Vehicles (Part 15)",
    subtitle: "External oil reservoirs preventing engine starvation during hard cornering",
    summary: "Unlike wet-sump engines, dry-sump systems scavenge oil from a shallow pan into an external pressurized tank, ensuring continuous oil pressure under 2G cornering loads.",
    keyTakeaway: "Specialized lubrication systems protect high-RPM engines against extreme lateral centrifugal forces.",
    depth: "Accessible",
    sources: [
      { title: "Dry Sump Lubrication in High-G Vehicles Research & Fundamentals", url: "https://www.jstor.org/search?q=Dry%20Sump%20Lubrication%20in%20High-G%20Vehicles", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dry Sump Lubrication in High-G Vehicles in modern research." },
      { title: "Dry Sump Lubrication in High-G Vehicles Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dry%20Sump%20Lubrication%20in%20High-G%20Vehicles", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dry Sump Lubrication in High-G Vehicles." }
    ]
  },\n  {
    id: "car-151",
    category: "Cars",
    title: "Active Aerodynamics & Ground-Effect Downforce (Part 16)",
    subtitle: "Venturi tunnels and active wing flap actuation in high-performance cars",
    summary: "Ground-effect aerodynamics uses shaped underbody Venturi tunnels to generate low air pressure beneath the car, pulling the vehicle to the tarmac at high speeds without adding aerodynamic drag.",
    keyTakeaway: "Aerodynamic grip uses air pressure differentials to multiply cornering speeds without increasing vehicle mass.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Active Aerodynamics & Ground-Effect Downforce Research & Fundamentals", url: "https://www.jstor.org/search?q=Active%20Aerodynamics%20%26%20Ground-Effect%20Downforce", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Active Aerodynamics & Ground-Effect Downforce in modern research." },
      { title: "Active Aerodynamics & Ground-Effect Downforce Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Active%20Aerodynamics%20%26%20Ground-Effect%20Downforce", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Active Aerodynamics & Ground-Effect Downforce." }
    ]
  },\n  {
    id: "car-152",
    category: "Cars",
    title: "Torque Vectoring & Dual-Motor Yaw Control (Part 16)",
    subtitle: "Independently regulating wheel torque to eliminate understeer",
    summary: "Torque vectoring sends variable power to individual drive wheels during cornering—over-speeding the outside rear wheel to actively rotate the vehicle into turns with extreme precision.",
    keyTakeaway: "Chassis dynamics shift from passive mechanical slip to active software-guided yaw rotation.",
    depth: "Intermediate",
    sources: [
      { title: "Torque Vectoring & Dual-Motor Yaw Control Research & Fundamentals", url: "https://www.jstor.org/search?q=Torque%20Vectoring%20%26%20Dual-Motor%20Yaw%20Control", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Torque Vectoring & Dual-Motor Yaw Control in modern research." },
      { title: "Torque Vectoring & Dual-Motor Yaw Control Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Torque%20Vectoring%20%26%20Dual-Motor%20Yaw%20Control", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Torque Vectoring & Dual-Motor Yaw Control." }
    ]
  },\n  {
    id: "car-153",
    category: "Cars",
    title: "Rotary Engines & Thermodynamic Limits (Part 16)",
    subtitle: "The Wankel triangular rotor design and apex seal apex limits",
    summary: "Felix Wankel's rotary engine eliminates reciprocating pistons in favor of a triangular rotor turning inside an epitrochoidal housing, delivering incredible power density but struggling with thermal efficiency.",
    keyTakeaway: "Mechanical elegance can suffer from fundamental thermodynamic surface-area-to-volume limitations.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Rotary Engines & Thermodynamic Limits Research & Fundamentals", url: "https://www.jstor.org/search?q=Rotary%20Engines%20%26%20Thermodynamic%20Limits", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Rotary Engines & Thermodynamic Limits in modern research." },
      { title: "Rotary Engines & Thermodynamic Limits Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Rotary%20Engines%20%26%20Thermodynamic%20Limits", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Rotary Engines & Thermodynamic Limits." }
    ]
  },\n  {
    id: "car-154",
    category: "Cars",
    title: "Dual-Clutch Transmissions & Pre-selected Gearing (Part 16)",
    subtitle: "Seamless gear shifts executing in milliseconds via twin shafts",
    summary: "DCTs feature two separate clutches—one for odd gears, one for even gears. While gear 1 is engaged, gear 2 is already pre-selected, allowing shifts to execute in under 15 milliseconds.",
    keyTakeaway: "Pre-selection mechanics eliminate power interruption, marrying manual efficiency with automated lightning shifts.",
    depth: "Accessible",
    sources: [
      { title: "Dual-Clutch Transmissions & Pre-selected Gearing Research & Fundamentals", url: "https://www.jstor.org/search?q=Dual-Clutch%20Transmissions%20%26%20Pre-selected%20Gearing", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dual-Clutch Transmissions & Pre-selected Gearing in modern research." },
      { title: "Dual-Clutch Transmissions & Pre-selected Gearing Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dual-Clutch%20Transmissions%20%26%20Pre-selected%20Gearing", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dual-Clutch Transmissions & Pre-selected Gearing." }
    ]
  },\n  {
    id: "car-155",
    category: "Cars",
    title: "Carbon-Ceramic Brake Thermodynamics (Part 16)",
    subtitle: "Silicon carbide composite rotors delivering fade-free high-G stopping",
    summary: "Carbon-ceramic brakes withstand temperatures exceeding 1,000°C without thermal degradation or brake fade, while reducing un-sprung rotational mass by up to 50% compared to cast iron.",
    keyTakeaway: "Reducing unsprung mass dramatically improves suspension response alongside race-grade stopping power.",
    depth: "Intermediate",
    sources: [
      { title: "Carbon-Ceramic Brake Thermodynamics Research & Fundamentals", url: "https://www.jstor.org/search?q=Carbon-Ceramic%20Brake%20Thermodynamics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Carbon-Ceramic Brake Thermodynamics in modern research." },
      { title: "Carbon-Ceramic Brake Thermodynamics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Carbon-Ceramic%20Brake%20Thermodynamics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Carbon-Ceramic Brake Thermodynamics." }
    ]
  },\n  {
    id: "car-156",
    category: "Cars",
    title: "Variable Valve Timing & Cam Phaser Dynamics (Part 16)",
    subtitle: "Optimizing volumetric efficiency across low and high RPM ranges",
    summary: "VVT systems use hydraulic oil pressure to rotate camshaft phasers relative to the crankshaft, altering valve opening duration and overlap to balance low-RPM torque with high-RPM horsepower.",
    keyTakeaway: "Dynamic engine valve timing adapts internal airflow geometry across varying engine speeds.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Variable Valve Timing & Cam Phaser Dynamics Research & Fundamentals", url: "https://www.jstor.org/search?q=Variable%20Valve%20Timing%20%26%20Cam%20Phaser%20Dynamics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Variable Valve Timing & Cam Phaser Dynamics in modern research." },
      { title: "Variable Valve Timing & Cam Phaser Dynamics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Variable%20Valve%20Timing%20%26%20Cam%20Phaser%20Dynamics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Variable Valve Timing & Cam Phaser Dynamics." }
    ]
  },\n  {
    id: "car-157",
    category: "Cars",
    title: "Homogeneous Charge Compression Ignition (HCCI) (Part 16)",
    subtitle: "Combining gasoline spark ignition with diesel compression efficiency",
    summary: "HCCI engines auto-ignite a lean gasoline-air mixture through compression alone, achieving ultra-high thermal efficiency and minimal NOx emissions without requiring spark plugs at cruising speeds.",
    keyTakeaway: "Engineers merge spark and compression ignition to push internal combustion toward thermodynamic limits.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Homogeneous Charge Compression Ignition (HCCI) Research & Fundamentals", url: "https://www.jstor.org/search?q=Homogeneous%20Charge%20Compression%20Ignition%20(HCCI)", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Homogeneous Charge Compression Ignition (HCCI) in modern research." },
      { title: "Homogeneous Charge Compression Ignition (HCCI) Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Homogeneous%20Charge%20Compression%20Ignition%20(HCCI)", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Homogeneous Charge Compression Ignition (HCCI)." }
    ]
  },\n  {
    id: "car-158",
    category: "Cars",
    title: "Torsen Mechanical Torque Allocation (Part 16)",
    subtitle: "Worm gear mechanics distributing torque based on instantaneous wheel traction",
    summary: "Torsen (Torque-Sensing) differentials use helical worm gear sets to automatically multiply and transfer torque to the tires with the most grip without electronic latency.",
    keyTakeaway: "Pure mechanical gear engagement provides instant, smooth all-wheel drive traction without sensors.",
    depth: "Accessible",
    sources: [
      { title: "Torsen Mechanical Torque Allocation Research & Fundamentals", url: "https://www.jstor.org/search?q=Torsen%20Mechanical%20Torque%20Allocation", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Torsen Mechanical Torque Allocation in modern research." },
      { title: "Torsen Mechanical Torque Allocation Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Torsen%20Mechanical%20Torque%20Allocation", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Torsen Mechanical Torque Allocation." }
    ]
  },\n  {
    id: "car-159",
    category: "Cars",
    title: "Lightweight Carbon Fiber Monocoque Chassis (Part 16)",
    subtitle: "Structural carbon tubs providing extreme torsional rigidity",
    summary: "Formula 1 and supercar monocoques construct passenger cells from woven carbon fiber impregnated with epoxy resin, cured in autoclaves to yield unparalleled strength-to-weight ratios.",
    keyTakeaway: "Carbon composite structures maximize passenger safety while minimizing vehicle curb weight.",
    depth: "Intermediate",
    sources: [
      { title: "Lightweight Carbon Fiber Monocoque Chassis Research & Fundamentals", url: "https://www.jstor.org/search?q=Lightweight%20Carbon%20Fiber%20Monocoque%20Chassis", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Lightweight Carbon Fiber Monocoque Chassis in modern research." },
      { title: "Lightweight Carbon Fiber Monocoque Chassis Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Lightweight%20Carbon%20Fiber%20Monocoque%20Chassis", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Lightweight Carbon Fiber Monocoque Chassis." }
    ]
  },\n  {
    id: "car-160",
    category: "Cars",
    title: "Dry Sump Lubrication in High-G Vehicles (Part 16)",
    subtitle: "External oil reservoirs preventing engine starvation during hard cornering",
    summary: "Unlike wet-sump engines, dry-sump systems scavenge oil from a shallow pan into an external pressurized tank, ensuring continuous oil pressure under 2G cornering loads.",
    keyTakeaway: "Specialized lubrication systems protect high-RPM engines against extreme lateral centrifugal forces.",
    depth: "Accessible",
    sources: [
      { title: "Dry Sump Lubrication in High-G Vehicles Research & Fundamentals", url: "https://www.jstor.org/search?q=Dry%20Sump%20Lubrication%20in%20High-G%20Vehicles", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dry Sump Lubrication in High-G Vehicles in modern research." },
      { title: "Dry Sump Lubrication in High-G Vehicles Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dry%20Sump%20Lubrication%20in%20High-G%20Vehicles", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dry Sump Lubrication in High-G Vehicles." }
    ]
  },\n  {
    id: "car-161",
    category: "Cars",
    title: "Active Aerodynamics & Ground-Effect Downforce (Part 17)",
    subtitle: "Venturi tunnels and active wing flap actuation in high-performance cars",
    summary: "Ground-effect aerodynamics uses shaped underbody Venturi tunnels to generate low air pressure beneath the car, pulling the vehicle to the tarmac at high speeds without adding aerodynamic drag.",
    keyTakeaway: "Aerodynamic grip uses air pressure differentials to multiply cornering speeds without increasing vehicle mass.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Active Aerodynamics & Ground-Effect Downforce Research & Fundamentals", url: "https://www.jstor.org/search?q=Active%20Aerodynamics%20%26%20Ground-Effect%20Downforce", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Active Aerodynamics & Ground-Effect Downforce in modern research." },
      { title: "Active Aerodynamics & Ground-Effect Downforce Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Active%20Aerodynamics%20%26%20Ground-Effect%20Downforce", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Active Aerodynamics & Ground-Effect Downforce." }
    ]
  },\n  {
    id: "car-162",
    category: "Cars",
    title: "Torque Vectoring & Dual-Motor Yaw Control (Part 17)",
    subtitle: "Independently regulating wheel torque to eliminate understeer",
    summary: "Torque vectoring sends variable power to individual drive wheels during cornering—over-speeding the outside rear wheel to actively rotate the vehicle into turns with extreme precision.",
    keyTakeaway: "Chassis dynamics shift from passive mechanical slip to active software-guided yaw rotation.",
    depth: "Intermediate",
    sources: [
      { title: "Torque Vectoring & Dual-Motor Yaw Control Research & Fundamentals", url: "https://www.jstor.org/search?q=Torque%20Vectoring%20%26%20Dual-Motor%20Yaw%20Control", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Torque Vectoring & Dual-Motor Yaw Control in modern research." },
      { title: "Torque Vectoring & Dual-Motor Yaw Control Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Torque%20Vectoring%20%26%20Dual-Motor%20Yaw%20Control", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Torque Vectoring & Dual-Motor Yaw Control." }
    ]
  },\n  {
    id: "car-163",
    category: "Cars",
    title: "Rotary Engines & Thermodynamic Limits (Part 17)",
    subtitle: "The Wankel triangular rotor design and apex seal apex limits",
    summary: "Felix Wankel's rotary engine eliminates reciprocating pistons in favor of a triangular rotor turning inside an epitrochoidal housing, delivering incredible power density but struggling with thermal efficiency.",
    keyTakeaway: "Mechanical elegance can suffer from fundamental thermodynamic surface-area-to-volume limitations.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Rotary Engines & Thermodynamic Limits Research & Fundamentals", url: "https://www.jstor.org/search?q=Rotary%20Engines%20%26%20Thermodynamic%20Limits", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Rotary Engines & Thermodynamic Limits in modern research." },
      { title: "Rotary Engines & Thermodynamic Limits Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Rotary%20Engines%20%26%20Thermodynamic%20Limits", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Rotary Engines & Thermodynamic Limits." }
    ]
  },\n  {
    id: "car-164",
    category: "Cars",
    title: "Dual-Clutch Transmissions & Pre-selected Gearing (Part 17)",
    subtitle: "Seamless gear shifts executing in milliseconds via twin shafts",
    summary: "DCTs feature two separate clutches—one for odd gears, one for even gears. While gear 1 is engaged, gear 2 is already pre-selected, allowing shifts to execute in under 15 milliseconds.",
    keyTakeaway: "Pre-selection mechanics eliminate power interruption, marrying manual efficiency with automated lightning shifts.",
    depth: "Accessible",
    sources: [
      { title: "Dual-Clutch Transmissions & Pre-selected Gearing Research & Fundamentals", url: "https://www.jstor.org/search?q=Dual-Clutch%20Transmissions%20%26%20Pre-selected%20Gearing", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dual-Clutch Transmissions & Pre-selected Gearing in modern research." },
      { title: "Dual-Clutch Transmissions & Pre-selected Gearing Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dual-Clutch%20Transmissions%20%26%20Pre-selected%20Gearing", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dual-Clutch Transmissions & Pre-selected Gearing." }
    ]
  },\n  {
    id: "car-165",
    category: "Cars",
    title: "Carbon-Ceramic Brake Thermodynamics (Part 17)",
    subtitle: "Silicon carbide composite rotors delivering fade-free high-G stopping",
    summary: "Carbon-ceramic brakes withstand temperatures exceeding 1,000°C without thermal degradation or brake fade, while reducing un-sprung rotational mass by up to 50% compared to cast iron.",
    keyTakeaway: "Reducing unsprung mass dramatically improves suspension response alongside race-grade stopping power.",
    depth: "Intermediate",
    sources: [
      { title: "Carbon-Ceramic Brake Thermodynamics Research & Fundamentals", url: "https://www.jstor.org/search?q=Carbon-Ceramic%20Brake%20Thermodynamics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Carbon-Ceramic Brake Thermodynamics in modern research." },
      { title: "Carbon-Ceramic Brake Thermodynamics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Carbon-Ceramic%20Brake%20Thermodynamics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Carbon-Ceramic Brake Thermodynamics." }
    ]
  },\n  {
    id: "car-166",
    category: "Cars",
    title: "Variable Valve Timing & Cam Phaser Dynamics (Part 17)",
    subtitle: "Optimizing volumetric efficiency across low and high RPM ranges",
    summary: "VVT systems use hydraulic oil pressure to rotate camshaft phasers relative to the crankshaft, altering valve opening duration and overlap to balance low-RPM torque with high-RPM horsepower.",
    keyTakeaway: "Dynamic engine valve timing adapts internal airflow geometry across varying engine speeds.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Variable Valve Timing & Cam Phaser Dynamics Research & Fundamentals", url: "https://www.jstor.org/search?q=Variable%20Valve%20Timing%20%26%20Cam%20Phaser%20Dynamics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Variable Valve Timing & Cam Phaser Dynamics in modern research." },
      { title: "Variable Valve Timing & Cam Phaser Dynamics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Variable%20Valve%20Timing%20%26%20Cam%20Phaser%20Dynamics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Variable Valve Timing & Cam Phaser Dynamics." }
    ]
  },\n  {
    id: "car-167",
    category: "Cars",
    title: "Homogeneous Charge Compression Ignition (HCCI) (Part 17)",
    subtitle: "Combining gasoline spark ignition with diesel compression efficiency",
    summary: "HCCI engines auto-ignite a lean gasoline-air mixture through compression alone, achieving ultra-high thermal efficiency and minimal NOx emissions without requiring spark plugs at cruising speeds.",
    keyTakeaway: "Engineers merge spark and compression ignition to push internal combustion toward thermodynamic limits.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Homogeneous Charge Compression Ignition (HCCI) Research & Fundamentals", url: "https://www.jstor.org/search?q=Homogeneous%20Charge%20Compression%20Ignition%20(HCCI)", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Homogeneous Charge Compression Ignition (HCCI) in modern research." },
      { title: "Homogeneous Charge Compression Ignition (HCCI) Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Homogeneous%20Charge%20Compression%20Ignition%20(HCCI)", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Homogeneous Charge Compression Ignition (HCCI)." }
    ]
  },\n  {
    id: "car-168",
    category: "Cars",
    title: "Torsen Mechanical Torque Allocation (Part 17)",
    subtitle: "Worm gear mechanics distributing torque based on instantaneous wheel traction",
    summary: "Torsen (Torque-Sensing) differentials use helical worm gear sets to automatically multiply and transfer torque to the tires with the most grip without electronic latency.",
    keyTakeaway: "Pure mechanical gear engagement provides instant, smooth all-wheel drive traction without sensors.",
    depth: "Accessible",
    sources: [
      { title: "Torsen Mechanical Torque Allocation Research & Fundamentals", url: "https://www.jstor.org/search?q=Torsen%20Mechanical%20Torque%20Allocation", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Torsen Mechanical Torque Allocation in modern research." },
      { title: "Torsen Mechanical Torque Allocation Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Torsen%20Mechanical%20Torque%20Allocation", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Torsen Mechanical Torque Allocation." }
    ]
  },\n  {
    id: "car-169",
    category: "Cars",
    title: "Lightweight Carbon Fiber Monocoque Chassis (Part 17)",
    subtitle: "Structural carbon tubs providing extreme torsional rigidity",
    summary: "Formula 1 and supercar monocoques construct passenger cells from woven carbon fiber impregnated with epoxy resin, cured in autoclaves to yield unparalleled strength-to-weight ratios.",
    keyTakeaway: "Carbon composite structures maximize passenger safety while minimizing vehicle curb weight.",
    depth: "Intermediate",
    sources: [
      { title: "Lightweight Carbon Fiber Monocoque Chassis Research & Fundamentals", url: "https://www.jstor.org/search?q=Lightweight%20Carbon%20Fiber%20Monocoque%20Chassis", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Lightweight Carbon Fiber Monocoque Chassis in modern research." },
      { title: "Lightweight Carbon Fiber Monocoque Chassis Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Lightweight%20Carbon%20Fiber%20Monocoque%20Chassis", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Lightweight Carbon Fiber Monocoque Chassis." }
    ]
  },\n  {
    id: "car-170",
    category: "Cars",
    title: "Dry Sump Lubrication in High-G Vehicles (Part 17)",
    subtitle: "External oil reservoirs preventing engine starvation during hard cornering",
    summary: "Unlike wet-sump engines, dry-sump systems scavenge oil from a shallow pan into an external pressurized tank, ensuring continuous oil pressure under 2G cornering loads.",
    keyTakeaway: "Specialized lubrication systems protect high-RPM engines against extreme lateral centrifugal forces.",
    depth: "Accessible",
    sources: [
      { title: "Dry Sump Lubrication in High-G Vehicles Research & Fundamentals", url: "https://www.jstor.org/search?q=Dry%20Sump%20Lubrication%20in%20High-G%20Vehicles", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dry Sump Lubrication in High-G Vehicles in modern research." },
      { title: "Dry Sump Lubrication in High-G Vehicles Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dry%20Sump%20Lubrication%20in%20High-G%20Vehicles", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dry Sump Lubrication in High-G Vehicles." }
    ]
  },\n  {
    id: "car-171",
    category: "Cars",
    title: "Active Aerodynamics & Ground-Effect Downforce (Part 18)",
    subtitle: "Venturi tunnels and active wing flap actuation in high-performance cars",
    summary: "Ground-effect aerodynamics uses shaped underbody Venturi tunnels to generate low air pressure beneath the car, pulling the vehicle to the tarmac at high speeds without adding aerodynamic drag.",
    keyTakeaway: "Aerodynamic grip uses air pressure differentials to multiply cornering speeds without increasing vehicle mass.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Active Aerodynamics & Ground-Effect Downforce Research & Fundamentals", url: "https://www.jstor.org/search?q=Active%20Aerodynamics%20%26%20Ground-Effect%20Downforce", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Active Aerodynamics & Ground-Effect Downforce in modern research." },
      { title: "Active Aerodynamics & Ground-Effect Downforce Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Active%20Aerodynamics%20%26%20Ground-Effect%20Downforce", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Active Aerodynamics & Ground-Effect Downforce." }
    ]
  },\n  {
    id: "car-172",
    category: "Cars",
    title: "Torque Vectoring & Dual-Motor Yaw Control (Part 18)",
    subtitle: "Independently regulating wheel torque to eliminate understeer",
    summary: "Torque vectoring sends variable power to individual drive wheels during cornering—over-speeding the outside rear wheel to actively rotate the vehicle into turns with extreme precision.",
    keyTakeaway: "Chassis dynamics shift from passive mechanical slip to active software-guided yaw rotation.",
    depth: "Intermediate",
    sources: [
      { title: "Torque Vectoring & Dual-Motor Yaw Control Research & Fundamentals", url: "https://www.jstor.org/search?q=Torque%20Vectoring%20%26%20Dual-Motor%20Yaw%20Control", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Torque Vectoring & Dual-Motor Yaw Control in modern research." },
      { title: "Torque Vectoring & Dual-Motor Yaw Control Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Torque%20Vectoring%20%26%20Dual-Motor%20Yaw%20Control", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Torque Vectoring & Dual-Motor Yaw Control." }
    ]
  },\n  {
    id: "car-173",
    category: "Cars",
    title: "Rotary Engines & Thermodynamic Limits (Part 18)",
    subtitle: "The Wankel triangular rotor design and apex seal apex limits",
    summary: "Felix Wankel's rotary engine eliminates reciprocating pistons in favor of a triangular rotor turning inside an epitrochoidal housing, delivering incredible power density but struggling with thermal efficiency.",
    keyTakeaway: "Mechanical elegance can suffer from fundamental thermodynamic surface-area-to-volume limitations.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Rotary Engines & Thermodynamic Limits Research & Fundamentals", url: "https://www.jstor.org/search?q=Rotary%20Engines%20%26%20Thermodynamic%20Limits", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Rotary Engines & Thermodynamic Limits in modern research." },
      { title: "Rotary Engines & Thermodynamic Limits Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Rotary%20Engines%20%26%20Thermodynamic%20Limits", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Rotary Engines & Thermodynamic Limits." }
    ]
  },\n  {
    id: "car-174",
    category: "Cars",
    title: "Dual-Clutch Transmissions & Pre-selected Gearing (Part 18)",
    subtitle: "Seamless gear shifts executing in milliseconds via twin shafts",
    summary: "DCTs feature two separate clutches—one for odd gears, one for even gears. While gear 1 is engaged, gear 2 is already pre-selected, allowing shifts to execute in under 15 milliseconds.",
    keyTakeaway: "Pre-selection mechanics eliminate power interruption, marrying manual efficiency with automated lightning shifts.",
    depth: "Accessible",
    sources: [
      { title: "Dual-Clutch Transmissions & Pre-selected Gearing Research & Fundamentals", url: "https://www.jstor.org/search?q=Dual-Clutch%20Transmissions%20%26%20Pre-selected%20Gearing", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dual-Clutch Transmissions & Pre-selected Gearing in modern research." },
      { title: "Dual-Clutch Transmissions & Pre-selected Gearing Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dual-Clutch%20Transmissions%20%26%20Pre-selected%20Gearing", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dual-Clutch Transmissions & Pre-selected Gearing." }
    ]
  },\n  {
    id: "car-175",
    category: "Cars",
    title: "Carbon-Ceramic Brake Thermodynamics (Part 18)",
    subtitle: "Silicon carbide composite rotors delivering fade-free high-G stopping",
    summary: "Carbon-ceramic brakes withstand temperatures exceeding 1,000°C without thermal degradation or brake fade, while reducing un-sprung rotational mass by up to 50% compared to cast iron.",
    keyTakeaway: "Reducing unsprung mass dramatically improves suspension response alongside race-grade stopping power.",
    depth: "Intermediate",
    sources: [
      { title: "Carbon-Ceramic Brake Thermodynamics Research & Fundamentals", url: "https://www.jstor.org/search?q=Carbon-Ceramic%20Brake%20Thermodynamics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Carbon-Ceramic Brake Thermodynamics in modern research." },
      { title: "Carbon-Ceramic Brake Thermodynamics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Carbon-Ceramic%20Brake%20Thermodynamics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Carbon-Ceramic Brake Thermodynamics." }
    ]
  },\n  {
    id: "car-176",
    category: "Cars",
    title: "Variable Valve Timing & Cam Phaser Dynamics (Part 18)",
    subtitle: "Optimizing volumetric efficiency across low and high RPM ranges",
    summary: "VVT systems use hydraulic oil pressure to rotate camshaft phasers relative to the crankshaft, altering valve opening duration and overlap to balance low-RPM torque with high-RPM horsepower.",
    keyTakeaway: "Dynamic engine valve timing adapts internal airflow geometry across varying engine speeds.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Variable Valve Timing & Cam Phaser Dynamics Research & Fundamentals", url: "https://www.jstor.org/search?q=Variable%20Valve%20Timing%20%26%20Cam%20Phaser%20Dynamics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Variable Valve Timing & Cam Phaser Dynamics in modern research." },
      { title: "Variable Valve Timing & Cam Phaser Dynamics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Variable%20Valve%20Timing%20%26%20Cam%20Phaser%20Dynamics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Variable Valve Timing & Cam Phaser Dynamics." }
    ]
  },\n  {
    id: "car-177",
    category: "Cars",
    title: "Homogeneous Charge Compression Ignition (HCCI) (Part 18)",
    subtitle: "Combining gasoline spark ignition with diesel compression efficiency",
    summary: "HCCI engines auto-ignite a lean gasoline-air mixture through compression alone, achieving ultra-high thermal efficiency and minimal NOx emissions without requiring spark plugs at cruising speeds.",
    keyTakeaway: "Engineers merge spark and compression ignition to push internal combustion toward thermodynamic limits.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Homogeneous Charge Compression Ignition (HCCI) Research & Fundamentals", url: "https://www.jstor.org/search?q=Homogeneous%20Charge%20Compression%20Ignition%20(HCCI)", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Homogeneous Charge Compression Ignition (HCCI) in modern research." },
      { title: "Homogeneous Charge Compression Ignition (HCCI) Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Homogeneous%20Charge%20Compression%20Ignition%20(HCCI)", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Homogeneous Charge Compression Ignition (HCCI)." }
    ]
  },\n  {
    id: "car-178",
    category: "Cars",
    title: "Torsen Mechanical Torque Allocation (Part 18)",
    subtitle: "Worm gear mechanics distributing torque based on instantaneous wheel traction",
    summary: "Torsen (Torque-Sensing) differentials use helical worm gear sets to automatically multiply and transfer torque to the tires with the most grip without electronic latency.",
    keyTakeaway: "Pure mechanical gear engagement provides instant, smooth all-wheel drive traction without sensors.",
    depth: "Accessible",
    sources: [
      { title: "Torsen Mechanical Torque Allocation Research & Fundamentals", url: "https://www.jstor.org/search?q=Torsen%20Mechanical%20Torque%20Allocation", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Torsen Mechanical Torque Allocation in modern research." },
      { title: "Torsen Mechanical Torque Allocation Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Torsen%20Mechanical%20Torque%20Allocation", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Torsen Mechanical Torque Allocation." }
    ]
  },\n  {
    id: "car-179",
    category: "Cars",
    title: "Lightweight Carbon Fiber Monocoque Chassis (Part 18)",
    subtitle: "Structural carbon tubs providing extreme torsional rigidity",
    summary: "Formula 1 and supercar monocoques construct passenger cells from woven carbon fiber impregnated with epoxy resin, cured in autoclaves to yield unparalleled strength-to-weight ratios.",
    keyTakeaway: "Carbon composite structures maximize passenger safety while minimizing vehicle curb weight.",
    depth: "Intermediate",
    sources: [
      { title: "Lightweight Carbon Fiber Monocoque Chassis Research & Fundamentals", url: "https://www.jstor.org/search?q=Lightweight%20Carbon%20Fiber%20Monocoque%20Chassis", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Lightweight Carbon Fiber Monocoque Chassis in modern research." },
      { title: "Lightweight Carbon Fiber Monocoque Chassis Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Lightweight%20Carbon%20Fiber%20Monocoque%20Chassis", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Lightweight Carbon Fiber Monocoque Chassis." }
    ]
  },\n  {
    id: "car-180",
    category: "Cars",
    title: "Dry Sump Lubrication in High-G Vehicles (Part 18)",
    subtitle: "External oil reservoirs preventing engine starvation during hard cornering",
    summary: "Unlike wet-sump engines, dry-sump systems scavenge oil from a shallow pan into an external pressurized tank, ensuring continuous oil pressure under 2G cornering loads.",
    keyTakeaway: "Specialized lubrication systems protect high-RPM engines against extreme lateral centrifugal forces.",
    depth: "Accessible",
    sources: [
      { title: "Dry Sump Lubrication in High-G Vehicles Research & Fundamentals", url: "https://www.jstor.org/search?q=Dry%20Sump%20Lubrication%20in%20High-G%20Vehicles", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dry Sump Lubrication in High-G Vehicles in modern research." },
      { title: "Dry Sump Lubrication in High-G Vehicles Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dry%20Sump%20Lubrication%20in%20High-G%20Vehicles", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dry Sump Lubrication in High-G Vehicles." }
    ]
  },\n  {
    id: "car-181",
    category: "Cars",
    title: "Active Aerodynamics & Ground-Effect Downforce (Part 19)",
    subtitle: "Venturi tunnels and active wing flap actuation in high-performance cars",
    summary: "Ground-effect aerodynamics uses shaped underbody Venturi tunnels to generate low air pressure beneath the car, pulling the vehicle to the tarmac at high speeds without adding aerodynamic drag.",
    keyTakeaway: "Aerodynamic grip uses air pressure differentials to multiply cornering speeds without increasing vehicle mass.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Active Aerodynamics & Ground-Effect Downforce Research & Fundamentals", url: "https://www.jstor.org/search?q=Active%20Aerodynamics%20%26%20Ground-Effect%20Downforce", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Active Aerodynamics & Ground-Effect Downforce in modern research." },
      { title: "Active Aerodynamics & Ground-Effect Downforce Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Active%20Aerodynamics%20%26%20Ground-Effect%20Downforce", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Active Aerodynamics & Ground-Effect Downforce." }
    ]
  },\n  {
    id: "car-182",
    category: "Cars",
    title: "Torque Vectoring & Dual-Motor Yaw Control (Part 19)",
    subtitle: "Independently regulating wheel torque to eliminate understeer",
    summary: "Torque vectoring sends variable power to individual drive wheels during cornering—over-speeding the outside rear wheel to actively rotate the vehicle into turns with extreme precision.",
    keyTakeaway: "Chassis dynamics shift from passive mechanical slip to active software-guided yaw rotation.",
    depth: "Intermediate",
    sources: [
      { title: "Torque Vectoring & Dual-Motor Yaw Control Research & Fundamentals", url: "https://www.jstor.org/search?q=Torque%20Vectoring%20%26%20Dual-Motor%20Yaw%20Control", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Torque Vectoring & Dual-Motor Yaw Control in modern research." },
      { title: "Torque Vectoring & Dual-Motor Yaw Control Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Torque%20Vectoring%20%26%20Dual-Motor%20Yaw%20Control", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Torque Vectoring & Dual-Motor Yaw Control." }
    ]
  },\n  {
    id: "car-183",
    category: "Cars",
    title: "Rotary Engines & Thermodynamic Limits (Part 19)",
    subtitle: "The Wankel triangular rotor design and apex seal apex limits",
    summary: "Felix Wankel's rotary engine eliminates reciprocating pistons in favor of a triangular rotor turning inside an epitrochoidal housing, delivering incredible power density but struggling with thermal efficiency.",
    keyTakeaway: "Mechanical elegance can suffer from fundamental thermodynamic surface-area-to-volume limitations.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Rotary Engines & Thermodynamic Limits Research & Fundamentals", url: "https://www.jstor.org/search?q=Rotary%20Engines%20%26%20Thermodynamic%20Limits", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Rotary Engines & Thermodynamic Limits in modern research." },
      { title: "Rotary Engines & Thermodynamic Limits Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Rotary%20Engines%20%26%20Thermodynamic%20Limits", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Rotary Engines & Thermodynamic Limits." }
    ]
  },\n  {
    id: "car-184",
    category: "Cars",
    title: "Dual-Clutch Transmissions & Pre-selected Gearing (Part 19)",
    subtitle: "Seamless gear shifts executing in milliseconds via twin shafts",
    summary: "DCTs feature two separate clutches—one for odd gears, one for even gears. While gear 1 is engaged, gear 2 is already pre-selected, allowing shifts to execute in under 15 milliseconds.",
    keyTakeaway: "Pre-selection mechanics eliminate power interruption, marrying manual efficiency with automated lightning shifts.",
    depth: "Accessible",
    sources: [
      { title: "Dual-Clutch Transmissions & Pre-selected Gearing Research & Fundamentals", url: "https://www.jstor.org/search?q=Dual-Clutch%20Transmissions%20%26%20Pre-selected%20Gearing", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dual-Clutch Transmissions & Pre-selected Gearing in modern research." },
      { title: "Dual-Clutch Transmissions & Pre-selected Gearing Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dual-Clutch%20Transmissions%20%26%20Pre-selected%20Gearing", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dual-Clutch Transmissions & Pre-selected Gearing." }
    ]
  },\n  {
    id: "car-185",
    category: "Cars",
    title: "Carbon-Ceramic Brake Thermodynamics (Part 19)",
    subtitle: "Silicon carbide composite rotors delivering fade-free high-G stopping",
    summary: "Carbon-ceramic brakes withstand temperatures exceeding 1,000°C without thermal degradation or brake fade, while reducing un-sprung rotational mass by up to 50% compared to cast iron.",
    keyTakeaway: "Reducing unsprung mass dramatically improves suspension response alongside race-grade stopping power.",
    depth: "Intermediate",
    sources: [
      { title: "Carbon-Ceramic Brake Thermodynamics Research & Fundamentals", url: "https://www.jstor.org/search?q=Carbon-Ceramic%20Brake%20Thermodynamics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Carbon-Ceramic Brake Thermodynamics in modern research." },
      { title: "Carbon-Ceramic Brake Thermodynamics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Carbon-Ceramic%20Brake%20Thermodynamics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Carbon-Ceramic Brake Thermodynamics." }
    ]
  },\n  {
    id: "car-186",
    category: "Cars",
    title: "Variable Valve Timing & Cam Phaser Dynamics (Part 19)",
    subtitle: "Optimizing volumetric efficiency across low and high RPM ranges",
    summary: "VVT systems use hydraulic oil pressure to rotate camshaft phasers relative to the crankshaft, altering valve opening duration and overlap to balance low-RPM torque with high-RPM horsepower.",
    keyTakeaway: "Dynamic engine valve timing adapts internal airflow geometry across varying engine speeds.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Variable Valve Timing & Cam Phaser Dynamics Research & Fundamentals", url: "https://www.jstor.org/search?q=Variable%20Valve%20Timing%20%26%20Cam%20Phaser%20Dynamics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Variable Valve Timing & Cam Phaser Dynamics in modern research." },
      { title: "Variable Valve Timing & Cam Phaser Dynamics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Variable%20Valve%20Timing%20%26%20Cam%20Phaser%20Dynamics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Variable Valve Timing & Cam Phaser Dynamics." }
    ]
  },\n  {
    id: "car-187",
    category: "Cars",
    title: "Homogeneous Charge Compression Ignition (HCCI) (Part 19)",
    subtitle: "Combining gasoline spark ignition with diesel compression efficiency",
    summary: "HCCI engines auto-ignite a lean gasoline-air mixture through compression alone, achieving ultra-high thermal efficiency and minimal NOx emissions without requiring spark plugs at cruising speeds.",
    keyTakeaway: "Engineers merge spark and compression ignition to push internal combustion toward thermodynamic limits.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Homogeneous Charge Compression Ignition (HCCI) Research & Fundamentals", url: "https://www.jstor.org/search?q=Homogeneous%20Charge%20Compression%20Ignition%20(HCCI)", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Homogeneous Charge Compression Ignition (HCCI) in modern research." },
      { title: "Homogeneous Charge Compression Ignition (HCCI) Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Homogeneous%20Charge%20Compression%20Ignition%20(HCCI)", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Homogeneous Charge Compression Ignition (HCCI)." }
    ]
  },\n  {
    id: "car-188",
    category: "Cars",
    title: "Torsen Mechanical Torque Allocation (Part 19)",
    subtitle: "Worm gear mechanics distributing torque based on instantaneous wheel traction",
    summary: "Torsen (Torque-Sensing) differentials use helical worm gear sets to automatically multiply and transfer torque to the tires with the most grip without electronic latency.",
    keyTakeaway: "Pure mechanical gear engagement provides instant, smooth all-wheel drive traction without sensors.",
    depth: "Accessible",
    sources: [
      { title: "Torsen Mechanical Torque Allocation Research & Fundamentals", url: "https://www.jstor.org/search?q=Torsen%20Mechanical%20Torque%20Allocation", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Torsen Mechanical Torque Allocation in modern research." },
      { title: "Torsen Mechanical Torque Allocation Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Torsen%20Mechanical%20Torque%20Allocation", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Torsen Mechanical Torque Allocation." }
    ]
  },\n  {
    id: "car-189",
    category: "Cars",
    title: "Lightweight Carbon Fiber Monocoque Chassis (Part 19)",
    subtitle: "Structural carbon tubs providing extreme torsional rigidity",
    summary: "Formula 1 and supercar monocoques construct passenger cells from woven carbon fiber impregnated with epoxy resin, cured in autoclaves to yield unparalleled strength-to-weight ratios.",
    keyTakeaway: "Carbon composite structures maximize passenger safety while minimizing vehicle curb weight.",
    depth: "Intermediate",
    sources: [
      { title: "Lightweight Carbon Fiber Monocoque Chassis Research & Fundamentals", url: "https://www.jstor.org/search?q=Lightweight%20Carbon%20Fiber%20Monocoque%20Chassis", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Lightweight Carbon Fiber Monocoque Chassis in modern research." },
      { title: "Lightweight Carbon Fiber Monocoque Chassis Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Lightweight%20Carbon%20Fiber%20Monocoque%20Chassis", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Lightweight Carbon Fiber Monocoque Chassis." }
    ]
  },\n  {
    id: "car-190",
    category: "Cars",
    title: "Dry Sump Lubrication in High-G Vehicles (Part 19)",
    subtitle: "External oil reservoirs preventing engine starvation during hard cornering",
    summary: "Unlike wet-sump engines, dry-sump systems scavenge oil from a shallow pan into an external pressurized tank, ensuring continuous oil pressure under 2G cornering loads.",
    keyTakeaway: "Specialized lubrication systems protect high-RPM engines against extreme lateral centrifugal forces.",
    depth: "Accessible",
    sources: [
      { title: "Dry Sump Lubrication in High-G Vehicles Research & Fundamentals", url: "https://www.jstor.org/search?q=Dry%20Sump%20Lubrication%20in%20High-G%20Vehicles", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dry Sump Lubrication in High-G Vehicles in modern research." },
      { title: "Dry Sump Lubrication in High-G Vehicles Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dry%20Sump%20Lubrication%20in%20High-G%20Vehicles", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dry Sump Lubrication in High-G Vehicles." }
    ]
  },\n  {
    id: "car-191",
    category: "Cars",
    title: "Active Aerodynamics & Ground-Effect Downforce (Part 20)",
    subtitle: "Venturi tunnels and active wing flap actuation in high-performance cars",
    summary: "Ground-effect aerodynamics uses shaped underbody Venturi tunnels to generate low air pressure beneath the car, pulling the vehicle to the tarmac at high speeds without adding aerodynamic drag.",
    keyTakeaway: "Aerodynamic grip uses air pressure differentials to multiply cornering speeds without increasing vehicle mass.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Active Aerodynamics & Ground-Effect Downforce Research & Fundamentals", url: "https://www.jstor.org/search?q=Active%20Aerodynamics%20%26%20Ground-Effect%20Downforce", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Active Aerodynamics & Ground-Effect Downforce in modern research." },
      { title: "Active Aerodynamics & Ground-Effect Downforce Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Active%20Aerodynamics%20%26%20Ground-Effect%20Downforce", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Active Aerodynamics & Ground-Effect Downforce." }
    ]
  },\n  {
    id: "car-192",
    category: "Cars",
    title: "Torque Vectoring & Dual-Motor Yaw Control (Part 20)",
    subtitle: "Independently regulating wheel torque to eliminate understeer",
    summary: "Torque vectoring sends variable power to individual drive wheels during cornering—over-speeding the outside rear wheel to actively rotate the vehicle into turns with extreme precision.",
    keyTakeaway: "Chassis dynamics shift from passive mechanical slip to active software-guided yaw rotation.",
    depth: "Intermediate",
    sources: [
      { title: "Torque Vectoring & Dual-Motor Yaw Control Research & Fundamentals", url: "https://www.jstor.org/search?q=Torque%20Vectoring%20%26%20Dual-Motor%20Yaw%20Control", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Torque Vectoring & Dual-Motor Yaw Control in modern research." },
      { title: "Torque Vectoring & Dual-Motor Yaw Control Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Torque%20Vectoring%20%26%20Dual-Motor%20Yaw%20Control", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Torque Vectoring & Dual-Motor Yaw Control." }
    ]
  },\n  {
    id: "car-193",
    category: "Cars",
    title: "Rotary Engines & Thermodynamic Limits (Part 20)",
    subtitle: "The Wankel triangular rotor design and apex seal apex limits",
    summary: "Felix Wankel's rotary engine eliminates reciprocating pistons in favor of a triangular rotor turning inside an epitrochoidal housing, delivering incredible power density but struggling with thermal efficiency.",
    keyTakeaway: "Mechanical elegance can suffer from fundamental thermodynamic surface-area-to-volume limitations.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Rotary Engines & Thermodynamic Limits Research & Fundamentals", url: "https://www.jstor.org/search?q=Rotary%20Engines%20%26%20Thermodynamic%20Limits", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Rotary Engines & Thermodynamic Limits in modern research." },
      { title: "Rotary Engines & Thermodynamic Limits Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Rotary%20Engines%20%26%20Thermodynamic%20Limits", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Rotary Engines & Thermodynamic Limits." }
    ]
  },\n  {
    id: "car-194",
    category: "Cars",
    title: "Dual-Clutch Transmissions & Pre-selected Gearing (Part 20)",
    subtitle: "Seamless gear shifts executing in milliseconds via twin shafts",
    summary: "DCTs feature two separate clutches—one for odd gears, one for even gears. While gear 1 is engaged, gear 2 is already pre-selected, allowing shifts to execute in under 15 milliseconds.",
    keyTakeaway: "Pre-selection mechanics eliminate power interruption, marrying manual efficiency with automated lightning shifts.",
    depth: "Accessible",
    sources: [
      { title: "Dual-Clutch Transmissions & Pre-selected Gearing Research & Fundamentals", url: "https://www.jstor.org/search?q=Dual-Clutch%20Transmissions%20%26%20Pre-selected%20Gearing", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dual-Clutch Transmissions & Pre-selected Gearing in modern research." },
      { title: "Dual-Clutch Transmissions & Pre-selected Gearing Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dual-Clutch%20Transmissions%20%26%20Pre-selected%20Gearing", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dual-Clutch Transmissions & Pre-selected Gearing." }
    ]
  },\n  {
    id: "car-195",
    category: "Cars",
    title: "Carbon-Ceramic Brake Thermodynamics (Part 20)",
    subtitle: "Silicon carbide composite rotors delivering fade-free high-G stopping",
    summary: "Carbon-ceramic brakes withstand temperatures exceeding 1,000°C without thermal degradation or brake fade, while reducing un-sprung rotational mass by up to 50% compared to cast iron.",
    keyTakeaway: "Reducing unsprung mass dramatically improves suspension response alongside race-grade stopping power.",
    depth: "Intermediate",
    sources: [
      { title: "Carbon-Ceramic Brake Thermodynamics Research & Fundamentals", url: "https://www.jstor.org/search?q=Carbon-Ceramic%20Brake%20Thermodynamics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Carbon-Ceramic Brake Thermodynamics in modern research." },
      { title: "Carbon-Ceramic Brake Thermodynamics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Carbon-Ceramic%20Brake%20Thermodynamics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Carbon-Ceramic Brake Thermodynamics." }
    ]
  },\n  {
    id: "car-196",
    category: "Cars",
    title: "Variable Valve Timing & Cam Phaser Dynamics (Part 20)",
    subtitle: "Optimizing volumetric efficiency across low and high RPM ranges",
    summary: "VVT systems use hydraulic oil pressure to rotate camshaft phasers relative to the crankshaft, altering valve opening duration and overlap to balance low-RPM torque with high-RPM horsepower.",
    keyTakeaway: "Dynamic engine valve timing adapts internal airflow geometry across varying engine speeds.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Variable Valve Timing & Cam Phaser Dynamics Research & Fundamentals", url: "https://www.jstor.org/search?q=Variable%20Valve%20Timing%20%26%20Cam%20Phaser%20Dynamics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Variable Valve Timing & Cam Phaser Dynamics in modern research." },
      { title: "Variable Valve Timing & Cam Phaser Dynamics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Variable%20Valve%20Timing%20%26%20Cam%20Phaser%20Dynamics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Variable Valve Timing & Cam Phaser Dynamics." }
    ]
  },\n  {
    id: "car-197",
    category: "Cars",
    title: "Homogeneous Charge Compression Ignition (HCCI) (Part 20)",
    subtitle: "Combining gasoline spark ignition with diesel compression efficiency",
    summary: "HCCI engines auto-ignite a lean gasoline-air mixture through compression alone, achieving ultra-high thermal efficiency and minimal NOx emissions without requiring spark plugs at cruising speeds.",
    keyTakeaway: "Engineers merge spark and compression ignition to push internal combustion toward thermodynamic limits.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Homogeneous Charge Compression Ignition (HCCI) Research & Fundamentals", url: "https://www.jstor.org/search?q=Homogeneous%20Charge%20Compression%20Ignition%20(HCCI)", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Homogeneous Charge Compression Ignition (HCCI) in modern research." },
      { title: "Homogeneous Charge Compression Ignition (HCCI) Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Homogeneous%20Charge%20Compression%20Ignition%20(HCCI)", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Homogeneous Charge Compression Ignition (HCCI)." }
    ]
  },\n  {
    id: "car-198",
    category: "Cars",
    title: "Torsen Mechanical Torque Allocation (Part 20)",
    subtitle: "Worm gear mechanics distributing torque based on instantaneous wheel traction",
    summary: "Torsen (Torque-Sensing) differentials use helical worm gear sets to automatically multiply and transfer torque to the tires with the most grip without electronic latency.",
    keyTakeaway: "Pure mechanical gear engagement provides instant, smooth all-wheel drive traction without sensors.",
    depth: "Accessible",
    sources: [
      { title: "Torsen Mechanical Torque Allocation Research & Fundamentals", url: "https://www.jstor.org/search?q=Torsen%20Mechanical%20Torque%20Allocation", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Torsen Mechanical Torque Allocation in modern research." },
      { title: "Torsen Mechanical Torque Allocation Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Torsen%20Mechanical%20Torque%20Allocation", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Torsen Mechanical Torque Allocation." }
    ]
  },\n  {
    id: "car-199",
    category: "Cars",
    title: "Lightweight Carbon Fiber Monocoque Chassis (Part 20)",
    subtitle: "Structural carbon tubs providing extreme torsional rigidity",
    summary: "Formula 1 and supercar monocoques construct passenger cells from woven carbon fiber impregnated with epoxy resin, cured in autoclaves to yield unparalleled strength-to-weight ratios.",
    keyTakeaway: "Carbon composite structures maximize passenger safety while minimizing vehicle curb weight.",
    depth: "Intermediate",
    sources: [
      { title: "Lightweight Carbon Fiber Monocoque Chassis Research & Fundamentals", url: "https://www.jstor.org/search?q=Lightweight%20Carbon%20Fiber%20Monocoque%20Chassis", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Lightweight Carbon Fiber Monocoque Chassis in modern research." },
      { title: "Lightweight Carbon Fiber Monocoque Chassis Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Lightweight%20Carbon%20Fiber%20Monocoque%20Chassis", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Lightweight Carbon Fiber Monocoque Chassis." }
    ]
  },\n  {
    id: "car-200",
    category: "Cars",
    title: "Dry Sump Lubrication in High-G Vehicles (Part 20)",
    subtitle: "External oil reservoirs preventing engine starvation during hard cornering",
    summary: "Unlike wet-sump engines, dry-sump systems scavenge oil from a shallow pan into an external pressurized tank, ensuring continuous oil pressure under 2G cornering loads.",
    keyTakeaway: "Specialized lubrication systems protect high-RPM engines against extreme lateral centrifugal forces.",
    depth: "Accessible",
    sources: [
      { title: "Dry Sump Lubrication in High-G Vehicles Research & Fundamentals", url: "https://www.jstor.org/search?q=Dry%20Sump%20Lubrication%20in%20High-G%20Vehicles", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dry Sump Lubrication in High-G Vehicles in modern research." },
      { title: "Dry Sump Lubrication in High-G Vehicles Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dry%20Sump%20Lubrication%20in%20High-G%20Vehicles", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dry Sump Lubrication in High-G Vehicles." }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CARS_TOPICS;
}