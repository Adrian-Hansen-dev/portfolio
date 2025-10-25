package com.adrianhansen.backend.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix = "cors")
public class CorsProperties {
    /**
     * Comma-separated list of allowed origins for CORS
     * Default: localhost:3000 and localhost:5173 for development
     */
    private String allowedOrigins = "http://localhost:3000,http://localhost:5173";

    /**
     * Allowed HTTP methods for CORS requests
     */
    private String[] allowedMethods = {"GET", "OPTIONS"};

    public String getAllowedOrigins() {
        return allowedOrigins;
    }

    public void setAllowedOrigins(String allowedOrigins) {
        this.allowedOrigins = allowedOrigins;
    }

    public String[] getAllowedMethods() {
        return allowedMethods;
    }

    public void setAllowedMethods(String[] allowedMethods) {
        this.allowedMethods = allowedMethods;
    }
}
