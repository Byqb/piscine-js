function getAcceleration(object) {
    const { f, m, Δv, Δt, t, d } = object;
  
    // Calculate acceleration using the Second Law of Motion
    if (f !== undefined && m !== undefined) {
      return f / m;
    } else if (Δv !== undefined && Δt !== undefined) {
      return Δv / Δt;
    } else if (t !== undefined && d !== undefined) {
      return 2 * d / (t * t);
    } else {
      return "impossible";
    }
  }