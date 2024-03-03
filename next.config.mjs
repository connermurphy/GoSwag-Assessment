/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        //allow optimisation of svg, safe to do so if we are controlling svg code
        //unsafe to do so if users can manipulate or modify svg (xss!)
        dangerouslyAllowSVG: true
    }
};

export default nextConfig;
