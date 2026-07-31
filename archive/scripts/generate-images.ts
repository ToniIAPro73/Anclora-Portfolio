import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

const OUTPUT_DIR = './public/images';

const images = [
  // Hero images
  {
    prompt: "Ultra luxury modern white minimalist villa complex in Port d'Andratx Mallorca, Mediterranean architecture, golden hour sunset lighting, crystal clear azure sea in background, professional architectural photography, 8k, Hasselblad, cinematic wide angle, serene and sophisticated",
    filename: "hero/hero-main.png",
    size: "1440x720" as const
  },
  {
    prompt: "Stunning contemporary Mediterranean villa exterior, pristine white walls, natural stone accents, lush Mediterranean garden, infinity pool overlooking the sea, Port d'Andratx Mallorca, architectural photography, golden hour, 8k quality",
    filename: "hero/hero-alt.png",
    size: "1440x720" as const
  },
  // Interiors
  {
    prompt: "Luxury minimalist living room interior, floor-to-ceiling windows with Mediterranean sea view, Binissalem stone walls, natural oak flooring, linen curtains, designer furniture, warm ambient lighting, sophisticated and serene, architectural interior photography, 8k",
    filename: "interiors/living-room.png",
    size: "1344x768" as const
  },
  {
    prompt: "Modern luxury kitchen interior, Calacatta marble island, oak cabinetry, Binissalem stone feature wall, premium appliances, natural light flooding through large windows, Mediterranean style, architectural photography, 8k quality",
    filename: "interiors/kitchen.png",
    size: "1344x768" as const
  },
  {
    prompt: "Master bedroom suite in luxury Mediterranean villa, king-size bed with premium linen, ocean view through floor-to-ceiling windows, warm oak flooring, subtle ambient lighting, minimalist sophisticated design, architectural photography, 8k",
    filename: "interiors/master-bedroom.png",
    size: "1344x768" as const
  },
  {
    prompt: "Spa-like luxury bathroom interior, freestanding bathtub, natural stone walls, rain shower, warm wood accents, soft lighting, Mediterranean minimalist design, architectural photography, 8k quality",
    filename: "interiors/bathroom.png",
    size: "1344x768" as const
  },
  {
    prompt: "Elegant dining room with sea view, natural wood dining table for 12, designer pendant lighting, Binissalem stone accent wall, Mediterranean minimalist interior, architectural photography, 8k quality",
    filename: "interiors/dining-room.png",
    size: "1344x768" as const
  },
  // Lifestyle
  {
    prompt: "Luxury yacht anchored in Port d'Andratx marina, crystal clear Mediterranean water, golden hour sunlight, Mallorca coastline in background, lifestyle photography, sophisticated and serene, 8k quality",
    filename: "lifestyle/yacht.png",
    size: "1344x768" as const
  },
  {
    prompt: "Michelin star restaurant terrace dining, elegant table setting, Mediterranean sea view at sunset, Port d'Andratx, refined atmosphere, lifestyle photography, 8k quality",
    filename: "lifestyle/dining-terrace.png",
    size: "1344x768" as const
  },
  {
    prompt: "Pristine Mediterranean cove beach, crystal clear turquoise water, rocky coastline, Mallorca hidden gem, natural beauty, serene atmosphere, travel photography, 8k quality",
    filename: "lifestyle/cove.png",
    size: "1344x768" as const
  },
  {
    prompt: "Port d'Andratx marina at dusk, luxury yachts, waterfront restaurants, Mediterranean promenade, sophisticated atmosphere, travel photography, 8k quality",
    filename: "lifestyle/marina.png",
    size: "1344x768" as const
  },
  {
    prompt: "Elegant poolside lifestyle scene, luxury sun loungers, Mediterranean villa in background, turquoise infinity pool, palm trees, golden hour light, lifestyle photography, 8k quality",
    filename: "lifestyle/poolside.png",
    size: "1344x768" as const
  },
  // Exteriors
  {
    prompt: "Rooftop infinity pool of luxury villa, panoramic Mediterranean sea view, sunset colors, modern architecture, elegant sun deck, Port d'Andratx Mallorca, architectural photography, 8k quality",
    filename: "exteriors/rooftop-pool.png",
    size: "1344x768" as const
  },
  {
    prompt: "Mediterranean villa exterior at night, warm interior lighting, elegant terrace, manicured garden, sophisticated atmosphere, architectural photography, 8k quality",
    filename: "exteriors/night-view.png",
    size: "1344x768" as const
  },
  {
    prompt: "Luxury villa garden terrace, outdoor living space, natural stone, Mediterranean plants, elegant outdoor furniture, sea view, architectural photography, 8k quality",
    filename: "exteriors/garden-terrace.png",
    size: "1344x768" as const
  },
  {
    prompt: "Modern villa entrance, grand doorway, natural stone and white walls, Mediterranean landscaping, sophisticated arrival experience, architectural photography, 8k quality",
    filename: "exteriors/entrance.png",
    size: "1344x768" as const
  },
  // Amenities
  {
    prompt: "Private home spa wellness area, sauna, relaxation lounge, natural wood and stone, soft lighting, Mediterranean minimalist design, architectural photography, 8k quality",
    filename: "amenities/spa.png",
    size: "1344x768" as const
  },
  {
    prompt: "Modern home gym with sea view, premium equipment, natural light, floor-to-ceiling windows, Mediterranean villa, architectural photography, 8k quality",
    filename: "amenities/gym.png",
    size: "1344x768" as const
  },
  {
    prompt: "Private wine cellar, climate-controlled, elegant display, tasting area, natural stone walls, sophisticated design, architectural photography, 8k quality",
    filename: "amenities/wine-cellar.png",
    size: "1344x768" as const
  },
  // Location
  {
    prompt: "Aerial view of Port d'Andratx, Mallorca, Mediterranean coastline, luxury villas, marina with yachts, crystal clear water, dramatic landscape, aerial photography, 8k quality",
    filename: "location/aerial.png",
    size: "1344x768" as const
  },
  {
    prompt: "Club de Vela marina Port d'Andratx, luxury yachts, Mediterranean sea, elegant waterfront, Mallorca, travel photography, 8k quality",
    filename: "location/marina-club.png",
    size: "1344x768" as const
  },
  {
    prompt: "Mallorca southwest coastline aerial view, Mediterranean Sea, dramatic cliffs, hidden coves, Port d'Andratx area, aerial photography, 8k quality",
    filename: "location/coastline.png",
    size: "1344x768" as const
  },
  // Details
  {
    prompt: "Premium Binissalem stone detail, natural texture, Mediterranean architecture material, close-up photography, 8k quality",
    filename: "details/stone-detail.png",
    size: "1024x1024" as const
  },
  {
    prompt: "Luxury brass hardware detail, matte gold finish, elegant door handle, close-up product photography, 8k quality",
    filename: "details/hardware.png",
    size: "1024x1024" as const
  },
  {
    prompt: "Natural oak wood flooring detail, warm tones, premium finish, architectural material close-up, 8k quality",
    filename: "details/flooring.png",
    size: "1024x1024" as const
  },
  // Gallery additions
  {
    prompt: "Luxury villa outdoor kitchen and BBQ area, premium appliances, natural stone, Mediterranean style, elegant entertaining space, architectural photography, 8k quality",
    filename: "exteriors/outdoor-kitchen.png",
    size: "1344x768" as const
  },
  {
    prompt: "Private home cinema room, plush seating, state-of-the-art screen, ambient lighting, luxury villa amenity, architectural photography, 8k quality",
    filename: "amenities/cinema.png",
    size: "1344x768" as const
  }
];

async function generateImages() {
  console.log('Starting image generation...');
  
  const zai = await ZAI.create();
  
  // Ensure output directories exist
  for (const img of images) {
    const dir = path.dirname(path.join(OUTPUT_DIR, img.filename));
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  }
  
  type GenerationResult =
    | { success: true; filename: string; size: number }
    | { success: false; filename: string; error: string }

  const results: GenerationResult[] = [];
  
  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    const outputPath = path.join(OUTPUT_DIR, img.filename);
    
    try {
      console.log(`[${i + 1}/${images.length}] Generating: ${img.filename}`);
      
      const response = await zai.images.generations.create({
        prompt: img.prompt,
        size: img.size
      });
      
      const imageBase64 = response.data[0].base64;
      const buffer = Buffer.from(imageBase64, 'base64');
      fs.writeFileSync(outputPath, buffer);
      
      results.push({
        success: true,
        filename: img.filename,
        size: buffer.length
      });
      
      console.log(`  ✓ Generated: ${img.filename} (${(buffer.length / 1024).toFixed(1)}KB)`);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error)
      results.push({
        success: false,
        filename: img.filename,
        error: message
      });
      console.error(`  ✗ Failed: ${img.filename} - ${message}`);
    }
  }
  
  const successful = results.filter(r => r.success).length;
  console.log(`\nGeneration complete: ${successful}/${images.length} images generated`);
  
  return results;
}

generateImages().catch(console.error);
