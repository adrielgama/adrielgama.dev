"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/navbar";
import { SideBento } from "@/components/side-bento";
import ScrollToTop from "@/components/scrolltotop";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider delayDuration={0}>
        <div className="relative bg-background">
          <SideBento />

          <div className="relative max-w-5xl select-none mx-auto">
            <Navbar />
            <BannerAnimation />
            {/* <Banner video="/banner.webm" src="/banner.gif" /> */}
            <div className="max-w-5xl mx-auto border-x border-border min-h-screen">
              {children}
            </div>
          </div>
          <ScrollToTop />
        </div>
      </TooltipProvider>
    </ThemeProvider>
  );
}

// Summed sine waves for organic, non-repeating motion
function sineSum(
  x: number,
  t: number,
  waves: [number, number, number][],
): number {
  return (
    waves.reduce(
      (acc, [freq, phase, speed]) =>
        acc + Math.sin(x * freq * 0.007 + t * speed + phase),
      0,
    ) / waves.length
  );
}

const RIBBONS: {
  y: number;
  amp: number;
  waves: [number, number, number][];
}[] = [
  {
    y: 0.12,
    amp: 0.22,
    waves: [
      [1.1, 0.0, 0.28],
      [2.3, 1.2, 0.45],
      [0.7, 2.4, 0.18],
    ],
  },
  {
    y: 0.32,
    amp: 0.19,
    waves: [
      [0.9, 1.0, 0.38],
      [1.8, 2.1, 0.22],
      [3.1, 0.5, 0.55],
    ],
  },
  {
    y: 0.52,
    amp: 0.24,
    waves: [
      [1.5, 2.0, 0.21],
      [0.8, 0.3, 0.5],
      [2.2, 1.8, 0.32],
    ],
  },
  {
    y: 0.72,
    amp: 0.18,
    waves: [
      [1.1, 0.5, 0.42],
      [2.0, 1.7, 0.24],
      [0.6, 2.9, 0.48],
    ],
  },
  {
    y: 0.88,
    amp: 0.14,
    waves: [
      [1.3, 1.3, 0.35],
      [0.5, 0.8, 0.6],
      [2.8, 2.2, 0.2],
    ],
  },
];

// dark mode: green-teal palette; light mode: near-black ultra-transparent
const DARK_COLORS = ["#085041", "#0F6E56", "#1D9E75", "#0D5C4A", "#9FE1CB"];
const DARK_ALPHAS = [0.75, 0.6, 0.65, 0.5, 0.35];
const LIGHT_ALPHAS = [0.055, 0.04, 0.05, 0.035, 0.025];

function BannerAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== "light";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0,
      h = 0,
      animId = 0,
      t = 0;

    const resize = () => {
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * devicePixelRatio;
      canvas.height = h * devicePixelRatio;
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      RIBBONS.forEach((ribbon, i) => {
        const pts: [number, number][] = [];
        for (let xi = 0; xi <= w; xi += 3) {
          const dy = sineSum(xi, t, ribbon.waves);
          pts.push([xi, ribbon.y * h + dy * ribbon.amp * h]);
        }

        const color = isDark ? DARK_COLORS[i] : "#000000";
        const alpha = isDark ? DARK_ALPHAS[i] : LIGHT_ALPHAS[i];

        // glow halo
        ctx.save();
        ctx.globalAlpha = alpha * 0.35;
        const haloGrad = ctx.createLinearGradient(0, 0, w, 0);
        haloGrad.addColorStop(0, color + "00");
        haloGrad.addColorStop(0.15, color);
        haloGrad.addColorStop(0.85, color);
        haloGrad.addColorStop(1, color + "00");
        ctx.beginPath();
        pts.forEach(([x, y], idx) =>
          idx === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y),
        );
        ctx.strokeStyle = haloGrad;
        ctx.lineWidth = isDark ? h * 0.09 : h * 0.06;
        ctx.lineJoin = "round";
        ctx.stroke();
        ctx.restore();

        // sharp core line
        ctx.save();
        ctx.globalAlpha = alpha;
        const lineGrad = ctx.createLinearGradient(0, 0, w, 0);
        lineGrad.addColorStop(0, color + "00");
        lineGrad.addColorStop(0.1, color);
        lineGrad.addColorStop(0.9, color);
        lineGrad.addColorStop(1, color + "00");
        ctx.beginPath();
        pts.forEach(([x, y], idx) =>
          idx === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y),
        );
        ctx.strokeStyle = lineGrad;
        ctx.lineWidth = isDark ? 1.2 : 0.8;
        ctx.lineJoin = "round";
        ctx.stroke();
        ctx.restore();
      });

      t += 0.012;
      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, [isDark]);

  return (
    <div
      className="relative w-full overflow-hidden bg-background"
      style={{ aspectRatio: "2560 / 423" }}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* horizontal scanlines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.025) 3px, rgba(0,0,0,0.025) 4px)",
        }}
      />

      {/* side vignette */}
      <div className="absolute inset-0 bg-linear-to-r from-background via-transparent to-background opacity-60" />

      {/* bottom fade into page */}
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-background to-transparent" />
    </div>
  );
}

// function Banner({
//   src,
//   video,
//   children,
// }: {
//   src?: string;
//   video?: string;
//   children?: React.ReactNode;
// }) {
//   return (
//     <div
//       className="relative w-full overflow-hidden bg-black"
//       style={{ aspectRatio: "2560 / 423" }}
//     >
//       {src && (
//         <Image
//           unoptimized
//           src={src}
//           alt=""
//           fill
//           className="object-cover object-center"
//           priority
//           aria-hidden="true"
//           loading="eager"
//         />
//       )}
//       {video && (
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           poster={src}
//           className="absolute inset-0 hidden md:block w-full h-full object-cover object-center"
//         >
//           <source src={video} type="video/webm" />
//         </video>
//       )}
//       {children}
//     </div>
//   );
// }
