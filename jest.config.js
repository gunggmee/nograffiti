const ignorePatterns = [".next", "/node_modules", "/public", "/styles"]

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  coveragePathIgnorePatterns: ignorePatterns,
  modulePathIgnorePatterns: ignorePatterns,
  testPathIgnorePatterns: ignorePatterns,
  watchPathIgnorePatterns: ignorePatterns,
  moduleDirectories: ["node_modules", "src"],
}
