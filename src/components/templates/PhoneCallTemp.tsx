import { useState } from 'react';
import { PhoneOutlined } from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion';
import { SiZalo, SiMessenger } from 'react-icons/si';

const PhoneCallTemp = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className='fixed right-4 bottom-4 z-50 sm:hidden'
    >
      <div className='flex flex-col items-end'>
        {/* Overlay */}
        {showMenu && (
          <div
            className='fixed inset-0 z-40 sm:hidden'
            onClick={() => setShowMenu(false)}
          />
        )}
        {/* Menu icon liên hệ */}
        <AnimatePresence>
          {showMenu && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              className='mb-3 flex flex-col items-end space-y-3 z-50'
            >
              <a
                href='https://zalo.me/0905859287'
                target='_blank'
                rel='noopener noreferrer'
                className='flex h-11 w-11 items-center justify-center rounded-full bg-white shadow hover:bg-blue-100 border border-blue-400 transition-all duration-200'
              >
                <SiZalo className='text-xl text-blue-500' />
              </a>
              <a
                href='tel:0905859287'
                className='flex h-11 w-11 items-center justify-center rounded-full bg-white shadow hover:bg-orange-100 border border-orange-400 transition-all duration-200'
              >
                <PhoneOutlined className='text-xl text-orange-500' />
              </a>
              <a
                href='https://m.me/yourpageid'
                target='_blank'
                rel='noopener noreferrer'
                className='flex h-11 w-11 items-center justify-center rounded-full bg-white shadow hover:bg-blue-50 border border-blue-400 transition-all duration-200'
              >
                <SiMessenger className='text-xl text-blue-500' />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Nút chính */}
        <button
          type='button'
          className='floating-action-button border-orange-500 bg-orange-500 shadow-lg hover:bg-orange-600 flex items-center justify-center rounded-full'
          style={{
            width: 'clamp(48px, 12vw, 60px)',
            height: 'clamp(48px, 12vw, 60px)',
            minWidth: '48px',
            minHeight: '48px',
          }}
          onClick={() => setShowMenu((v) => !v)}
        >
          <PhoneOutlined className='text-2xl text-white' />
        </button>
      </div>
    </motion.div>
  );
};

export default PhoneCallTemp;