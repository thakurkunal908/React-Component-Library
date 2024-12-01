/**
 * Converts a camelCase string to a Title Case string.
 * 
 * @param {string} str - The camelCase string to be converted.
 * @returns {string} - The converted Title Case string with spaces before capital letters.
 * 
 * @example
 * camelToTitle("camelCaseString");
 * // Returns: "Camel Case String"
 * 
 * @example
 * camelToTitle("exampleInput");
 * // Returns: "Example Input"
 */
export function camelToTitle(str: string): string {
    return str
      .replace(/([a-z])([A-Z])/g, '$1 $2') // Add space before capital letters
      .replace(/^./, char => char.toUpperCase()); // Capitalize the first letter
}
