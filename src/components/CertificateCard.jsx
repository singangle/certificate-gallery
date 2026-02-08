import React, { useState } from 'react';
import { FileText, Image as ImageIcon, ExternalLink, Calendar } from 'lucide-react';
import Modal from './Modal';
import PdfThumbnail from './PdfThumbnail';

const getFileType = (filename) => {
  const ext = filename.split('.').pop().toLowerCase();
  if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext)) return 'image';
  if (ext === 'pdf') return 'pdf';
  return 'unknown';
};

const CertificateCard = ({ certificate, align = 'left' }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(certificate.files[0]);

  // Find the first image to use as thumbnail, if available
  const imageFile = certificate.files.find(f => getFileType(f) === 'image');
  // If no image, try to find a pdf
  const pdfFile = !imageFile ? certificate.files.find(f => getFileType(f) === 'pdf') : null;
  
  const thumbnailSource = imageFile || pdfFile;
  const isPdfThumbnail = !imageFile && !!pdfFile;

  return (
    <>
      <div 
        className={`group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-matcha-100 hover:border-matcha-300 w-full max-w-md ${align === 'right' ? 'ml-auto' : 'mr-auto'}`}
      >
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-start">
            <div className="bg-matcha-100 text-matcha-800 text-xs font-semibold px-2.5 py-0.5 rounded-full w-fit">
              {certificate.type}
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              <Calendar size={14} className="mr-1" />
              {certificate.timestamp || certificate.year}
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-800 group-hover:text-matcha-700 transition-colors">
            {certificate.title}
          </h3>
          
          <p className="text-gray-600 text-sm leading-relaxed">
            {certificate.description}
          </p>

          <div 
            className="mt-2 relative h-48 w-full bg-gray-50 rounded-lg overflow-hidden border border-gray-100 cursor-pointer group-hover:border-matcha-200 transition-colors flex items-center justify-center"
            onClick={() => setIsModalOpen(true)}
          >
            {thumbnailSource ? (
              isPdfThumbnail ? (
                 <PdfThumbnail file={thumbnailSource} />
              ) : (
                <img 
                  src={thumbnailSource} 
                  alt={certificate.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )
            ) : (
              <div className="flex flex-col items-center justify-center text-matcha-400">
                <FileText size={48} strokeWidth={1.5} />
                <span className="text-xs mt-2 font-medium">View Document</span>
              </div>
            )}
            
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 z-20">
              <span className="bg-white/90 text-gray-800 px-3 py-1.5 rounded-full text-sm font-medium shadow-sm flex items-center gap-1.5">
                <ExternalLink size={14} />
                View
              </span>
            </div>
          </div>
        </div>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={certificate.title}
      >
        <div className="flex flex-col w-full h-full gap-4">
          <div className="flex-1 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden relative">
            {getFileType(selectedFile) === 'image' ? (
              <img src={selectedFile} alt="Certificate" className="max-w-full max-h-full object-contain" />
            ) : (
              <iframe 
                src={selectedFile} 
                className="w-full h-full" 
                title="Certificate PDF"
              />
            )}
          </div>
          
          {certificate.files.length > 1 && (
            <div className="flex gap-2 overflow-x-auto py-2 px-1">
              {certificate.files.map((file, idx) => {
                const isPdf = getFileType(file) === 'pdf';
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedFile(file)}
                    className={`relative flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${selectedFile === file ? 'border-matcha-500 ring-2 ring-matcha-200' : 'border-gray-200 hover:border-matcha-300'}`}
                  >
                    {getFileType(file) === 'image' ? (
                      <img src={file} alt="" className="w-full h-full object-cover" />
                    ) : (
                      isPdf ? (
                        <div className="w-full h-full overflow-hidden">
                          <PdfThumbnail file={file} />
                        </div>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-50 text-gray-400">
                          <FileText size={24} />
                        </div>
                      )
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default CertificateCard;
