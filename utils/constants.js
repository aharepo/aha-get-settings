export const INTERNAL_SERVICES = {
  AHA_SEARCH: {
    name: "AHA_SEARCH",
    allowedSettings: ["redis_url", "algolia_search_app_id", "algolia_search_api_key", "mysql_hostname", "mysql_username", "mysql_password", "mysql_port", "mysql_database"]
  },
};

export const ACCESS_TOKEN_EXPIRED_TIME = "30s"; // seconds
