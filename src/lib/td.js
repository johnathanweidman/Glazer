
/**
 * Calculates the Effective Attenuation Coefficient (μ_eff) of a filament
 * based on its HueForge Transmission Distance (TD).
 *
 * This is based on the Beer-Lambert law where T = 0.05 when X = TD.
 * The constant is -ln(0.05).
 */
export function getEffectiveAttenuation(tdValue) {
  if (tdValue <= 0) {
    // A TD of 0 is infinitely opaque.
    return Infinity;
  }

  // Calculate the constant -ln(0.05) directly for maximum precision
  const HUEFORGE_EXTINCTION_CONSTANT = -Math.log(0.05);

  return HUEFORGE_EXTINCTION_CONSTANT / tdValue; // μ_eff = -ln(0.05) / TD
}

/**
 * Calculates the translucency percentage of a filament for a
 * specific layer thickness.
 *
 * This function first calculates the filament's attenuation coefficient
 * using its TD, and then applies the Beer-Lambert law (T = e^(-μ*X))
 * to find the transmittance for the given layer thickness.
 *
 * @param {number} tdValue - The HueForge Transmission Distance (in mm).
 * @param {number} [layerThickness=0.08] - The thickness of the layer (in mm).
 * @returns {number} The translucency as a percentage (0-100).
 */
export function getTranslucencyAtThickness(tdValue, layerThickness = 0.08) {
  const mu_eff = getEffectiveAttenuation(tdValue);

  if (mu_eff === Infinity) {
    return 0; // Infinitely opaque, 0% translucency
  }

  // T = e^(-μ_eff * X)
  const transmittance = Math.exp(-mu_eff * layerThickness);

  // Return as a percentage
  return transmittance * 100;
}


// getTranslucencyAtThickness remains exactly the same and is correct.