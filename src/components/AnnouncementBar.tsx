import { motion } from "framer-motion";

const AnnouncementBar = () => (
  <div className="bg-surfaceSoft py-4 border-b border-hairline">
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-center text-body-sm text-ink underline font-medium cursor-pointer"
    >
      Learn about our commitment to quality and the artisans we support
    </motion.p>
  </div>
);

export default AnnouncementBar;
