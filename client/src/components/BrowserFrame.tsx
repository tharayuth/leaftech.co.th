import { cn } from "@/lib/utils";
import { Lock } from "lucide-react";
import type { ReactNode } from "react";

interface BrowserFrameProps {
  address: string;
  label?: string;
  badge?: ReactNode;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
}

/** Window chrome around a product view: traffic lights, address pill, optional live badge. */
export function BrowserFrame({
  address,
  label,
  badge,
  actions,
  children,
  className,
}: BrowserFrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-line-strong bg-ink-900 shadow-[0_40px_120px_-40px_rgb(0_0_0/0.9),0_0_0_1px_rgb(255_255_255/0.02)] sm:rounded-[20px]",
        className
      )}
    >
      <div className="flex h-11 items-center gap-3 border-b border-line bg-ink-850 px-3 sm:px-4">
        <div aria-hidden className="hidden items-center gap-1.5 sm:flex">
          <span className="size-2.5 rounded-full bg-[#ff5f57]/80" />
          <span className="size-2.5 rounded-full bg-[#febc2e]/80" />
          <span className="size-2.5 rounded-full bg-[#28c840]/80" />
        </div>
        <div className="flex min-w-0 flex-1 items-center justify-center">
          <div className="flex min-w-0 items-center gap-2 rounded-md bg-white/[0.05] px-3 py-1 text-xs text-slate-400">
            <Lock aria-hidden className="size-3 shrink-0 text-leaf-400" />
            <span className="truncate">
              {address}
              {label && (
                <span className="hidden text-slate-500 md:inline">
                  {" "}
                  · {label}
                </span>
              )}
            </span>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {badge}
          {actions}
        </div>
      </div>
      {children}
    </div>
  );
}

export function LiveBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-leaf-500/30 bg-leaf-500/10 px-2 py-0.5 text-[11px] font-semibold tracking-wider text-leaf-300 uppercase">
      <span className="size-1.5 animate-pulse-dot rounded-full bg-leaf-400" />
      {children}
    </span>
  );
}
