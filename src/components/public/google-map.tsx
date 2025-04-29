// Example: components/GoogleMap.tsx
const GoogleMap = () => {
    return (
      <div className="w-full h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.897359143946!2d90.3919403153848!3d23.750903284589955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b86b3c028d7d%3A0x2b83b09b3296d8d5!2sDhaka!5e0!3m2!1sen!2sbd!4v1716749638802!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          style={{ border: 0 }}
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  };
  
  export default GoogleMap;
  