import { motion } from "framer-motion";

import { SectionTitle } from "../shared/SectionTitle";

const images = [
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2083&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=2070&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2070&auto=format&fit=crop",
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-32">
      <div className="container-main">
        <SectionTitle
          eyebrow="Recent Transformations"
          title="Our"
          accent="Gallery"
        />

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-6
          "
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className="
                overflow-hidden
                rounded-2xl
              "
            >
              <img
                src={image}
                alt=""
                className="
                  h-[500px]
                  w-full
                  object-cover
                  hover:scale-105
                  transition-transform
                  duration-700
                "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
