/**
 * Wraps every page in the 375px-wide mobile interface that stays
 * centered on the webpage (per the assignment requirement).
 */
export default function MobileFrame({ children }) {
  return <div className="mobile-frame">{children}</div>
}
