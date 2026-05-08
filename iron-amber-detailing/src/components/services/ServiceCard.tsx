import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

export function ServiceCard({ title, description, image }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        min-h-[500px]
      "
    >
      <img
        src={image}
        alt={title}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          transition-transform
          duration-700
          group-hover:scale-110
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black
          via-black/50
          to-transparent
        "
      />

      <div
        className="
          relative
          z-10
          flex
          flex-col
          justify-end
          h-full
          p-8
        "
      >
        <h3
          className="
            font-heading
            text-4xl
            uppercase
            mb-4
          "
        >
          {title}
        </h3>

        <p className="text-white/70 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
