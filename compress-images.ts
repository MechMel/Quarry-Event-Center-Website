import sharp from "sharp";
import path from "path";
import fs from "fs/promises";

/**
 * Compress a single WebP image.
 * @param inputPath - Path to the input image.
 * @param outputPath - Path to save the compressed image.
 * @param quality - Compression quality (1-100).
 */
async function compressWebpImage(
  inputPath: string,
  outputPath: string,
  quality: number,
) {
  try {
    // Log original image metadata for reference
    const metadata = await sharp(inputPath).metadata();
    console.log(`Compressing "${inputPath}" (${metadata.size} bytes)...`);

    // Compress the image using the specified quality
    await sharp(inputPath).webp({ quality }).toFile(outputPath);

    console.log(`Saved compressed image as "${outputPath}"`);
  } catch (error) {
    console.error(`Error compressing image "${inputPath}":`, error);
  }
}

/**
 * Process all .webp images in the input directory.
 * @param inputDir - Directory containing input images.
 * @param outputDir - Directory to save compressed images.
 * @param quality - Compression quality.
 */
async function processImages(
  inputDir: string,
  outputDir: string,
  quality: number,
) {
  try {
    // Ensure the output directory exists
    await fs.mkdir(outputDir, { recursive: true });

    // Read files from the input directory
    const files = await fs.readdir(inputDir);

    // Filter for .webp files
    const webpFiles = files.filter(
      (file) => path.extname(file).toLowerCase() === ".webp",
    );

    if (webpFiles.length === 0) {
      console.log("No .webp files found in the input directory.");
      return;
    }

    // Process each .webp file
    for (const file of webpFiles) {
      const inputFilePath = path.join(inputDir, file);
      const outputFilePath = path.join(outputDir, file);
      await compressWebpImage(inputFilePath, outputFilePath, quality);
    }
  } catch (error) {
    console.error("Error processing images:", error);
  }
}

// Main configuration
const inputDir = path.join(__dirname, "images-to-compress");
const outputDir = path.join(__dirname, "public");
const quality = 50; // Adjust the quality (1-100) as needed

processImages(inputDir, outputDir, quality);
