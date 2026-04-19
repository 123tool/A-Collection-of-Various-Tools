# 17 Best Free OSINT Tools for Cyber Investigations

**OSINT Toolboxes**
-------------------

**1\. Maltego**

[Maltego](https://www.maltego.com/) is a multipurpose OSINT pivot engine and a visual investigation platform. It takes "entities," such as people, organizations, domains, or IP addresses and uses "transforms" to gather related information and present it in an interactive graph. 

[![Maltego screenshot](https://publishing-platform-legacy.whoisxmlapi.com/wordpress/wp-content/uploads/2025/07/osint-tools-maltego.png)](https://publishing-platform-legacy.whoisxmlapi.com/wordpress/wp-content/uploads/2025/07/osint-tools-maltego.png)

Image source: https://docs.maltego.com/en/support/solutions/articles/15000008836-panning-and-zooming#zooming-0-1

Maltego’s key features include:

*   “Transforms” — automated queries that fetch data from open data sources and APIs.
*   Various entities or data points that can be linked and analyzed.
*   Visual link analysis in an interactive graph, limited to 24 results per “transform” for free accounts.
*   Preconfigured sets of transforms called “machines” that automate common investigation workflows.
*   Prebuilt connectors that enable you to integrate with more than 100 data sources, with limited access for free accounts.

Maltego is not completely free, but it has a free tier called Basic, that provides you with core features and a couple of hundred credits per month to use the powerful engine for occasional small OSINT investigations.

**2\. SpiderFoot**

[SpiderFoot](https://github.com/smicallef/spiderfoot) is an OSINT automation tool for threat intelligence and attack surface mapping. You can gather and correlate information from over 200 data sources (some open, some paid) about targets like domain names, subdomains, IP addresses, personal or company names, email addresses, subnets, Bitcoin addresses, and usernames.

[![SpiderFoot Screenshot](https://publishing-platform-legacy.whoisxmlapi.com/wordpress/wp-content/uploads/2025/07/osint-tools-spiderfoot.png)](https://publishing-platform-legacy.whoisxmlapi.com/wordpress/wp-content/uploads/2025/07/osint-tools-spiderfoot.png)

Image source: https://medium.com/@micallst/lessons-learned-from-my-10-year-open-source-project-4a4c8c2b4f64

Among SpiderFoot’s key features are:

*   More than 200 modules or integrations that either don’t require API keys or have free tiers.
*   Both a web-based GUI and a command-line interface.
*   Modules that search the Tor network (dark web) for mentions of targets.

SpiderFoot is available on GitHub for free. Or rather, there’s a version that hasn’t received updates for two years and with more than two dozen pull requests awaiting acceptance and over a hundred issues awaiting triage. That probably has something to do with the fact that SpiderFoot was acquired by Intel 471 in 2022. The terms of the deal were not disclosed, but seemingly, since then, the open-source part of the project has been abandoned.

**3\. OSINT Framework**

[OSINT Framework](https://github.com/lockfale/osint-framework?) was developed to help users find free OSINT resources, although some data sources might still require registration or provide more data for a fee. It’s not strictly a toolbox that allows you to pivot off a data point, but more of a directory of resources from which you can find more information about a target data point. 

[![The OSINT Framework screenshot](https://publishing-platform-legacy.whoisxmlapi.com/wordpress/wp-content/uploads/2025/07/osint-framework.png)](https://publishing-platform-legacy.whoisxmlapi.com/wordpress/wp-content/uploads/2025/07/osint-framework.png)

Image source: https://osintframework.com/

The key features of the OSINT Framework are:

*   It is very organized, with the list of tools presented as a tree-like structure based on the type of information you already have and want to pivot off.
*   It prioritizes free or open-source tools.
*   OSINT Framework is maintained by the OSINT community, so the listed resources are likely updated.

OSINT Framework is completely free and open-source, with its source code available on GitHub under the MIT license. The project seems to be actively maintained, with the latest pull request merged less than a month ago.

### **4\. WhoisXML API MCP Server**

[WhoisXML API’s MCP Server](https://main.whoisxmlapi.com/ai/mcp-server) allows investigators to conduct OSINT analysis and complex internet infrastructure investigations directly from a familiar chatbot interface (like Claude or Gemini) using natural language. Essentially, it connects the LLM model to 17 different APIs like WHOIS and WHOIS History, a variety of DNS APIs, threat Intelligence, domain categorization, and other APIs that WhoisXML API offers.

[![WhoisXML API MCP Server](https://publishing-platform-legacy.whoisxmlapi.com/wordpress/wp-content/uploads/2025/10/image.png)](https://publishing-platform-legacy.whoisxmlapi.com/wordpress/wp-content/uploads/2025/10/image.png)

Among the MCP Server’s key features are:

*   Users can query data from APIs using natural language prompts, eliminating the need to code.
*   Users can instruct LLMs to access multiple APIs and pivot off a data point in a single request using multi-step queries.
*   The MCP server grants LLMs access to 17 different WhoisXML API tools, which contain billions of DNS, domain, and IP records — and more. 
*   The server offers multiple installation options, including Docker containers and native binaries.

The MCP Server is free to use. Existing WhoisXML API customers can use their API keys to set it up, while new users can [sign up](https://main.whoisxmlapi.com/signup) to get some free API credits. 

**Search Engines**
------------------

**1\. Ahmia.fi** 

[Ahmia.fi](http://ahmia.fi/) is a search engine designed to index and search hidden services on the Tor network. It allows investigators to find .onion sites without having to manually browse the Tor network. 

[![Ahmia.fi screenshot](https://publishing-platform-legacy.whoisxmlapi.com/wordpress/wp-content/uploads/2025/07/osint-tools-ahmia.png)](https://publishing-platform-legacy.whoisxmlapi.com/wordpress/wp-content/uploads/2025/07/osint-tools-ahmia.png)

Image source: a screenshot of Ahmia.fi done by the author

Its key features are:

*   It’s dark-web-specific but accessible via your regular web browser.
*   There’s a time filter that allows you to limit search results to entries added in the previous day, week, or month.
*   It filters out potentially illegal content.

[Ahmia.fi](http://ahmia.fi/) is free to use. If someone wants to contribute to the project, it’s [available on GitHub](https://github.com/ahmia/ahmia-site) under BSD-3-Clause license.

**2\. Intelligence X**

[Intelligence X](https://intelx.io/) specializes in searching for information in places not typically indexed by regular search engines, such as the darknet, document-sharing platforms, WHOIS databases, and public data leaks for email addresses, domains, URLs, IP addresses, CIDRs, Bitcoin addresses, IPFS hashes, and many other data points.

[![Intelligence X OSINT tool](https://publishing-platform-legacy.whoisxmlapi.com/wordpress/wp-content/uploads/2025/07/intelligence-x-1024x485.png)](https://publishing-platform-legacy.whoisxmlapi.com/wordpress/wp-content/uploads/2025/07/intelligence-x.png)

Some of Intelligence X’s features include:

*   A broader scope than other search engines since it searches several sources.
*   Searches current data but also archives historical data.
*   Supports a diverse range of input types.
*   Advanced search filters by date, media type, certain countries, specific TLDs, and other categories.

Intelligence X is a commercial product, but it offers as many as four different free tiers. They are, of course, severely limited compared to paid ones, but they still do the job.

**3\. Shodan**

[Shodan](https://www.shodan.io/) is a search engine for internet-connected devices that can be used for scanning IP addresses to find exposed services, industrial control systems, webcams, and other network devices. 

[![Shodan screenshot](https://publishing-platform-legacy.whoisxmlapi.com/wordpress/wp-content/uploads/2025/07/shodan-free-osint-tools-1024x470.png)](https://publishing-platform-legacy.whoisxmlapi.com/wordpress/wp-content/uploads/2025/07/shodan-free-osint-tools.png)

Shodan’s key features include the following:

*   The tool’s search is device-centric, unlike other search engines that index websites.
*   It displays service banners (metadata about running software or hardware), which often reveal version numbers, vulnerabilities, and misconfigurations.
*   It allows you to filter results based on location, metadata, hostname, ISP, operating system, and other parameters.

While Shodan offers commercial price plans and doesn’t have a free plan, it still allows users to perform basic searches without requiring them to log in.

**4\. Censys Search**

[Censys’ search engine](https://search.censys.io/) allows you to scan certificates and hosts (IP address, domain name, or protocol), which helps identify misconfigurations in web servers, databases, and other internet-facing systems. 

[![Censys Search screenshot](https://publishing-platform-legacy.whoisxmlapi.com/wordpress/wp-content/uploads/2025/07/censys-search-free-osint-tools-1024x659.png)](https://publishing-platform-legacy.whoisxmlapi.com/wordpress/wp-content/uploads/2025/07/censys-search-free-osint-tools.png)

Among its key features are:

*   Offers detailed information on SSL/TLS certificates, but you need to create an account to access other details like historical changes, WHOIS information, and connected domains.
*   Identifies the software, versions, and protocols running on exposed ports.
*   Performs broad and deep scans of the entire IPv4 space, often discovering different sets of exposed services and devices compared to other scanners.

Censys Search is a commercial product, but it allows you to perform some searches without having an account at all and offers additional information on the free plan. 

**Infrastructure Analysis Tools** 
----------------------------------

**1\. BuiltWith** 

[BuiltWith](http://builtwith.com/) is a website profiler that identifies the technologies used to build and run any given website. It uncovers everything from content management systems (CMS) and e-commerce platforms to analytics tools, hosting providers, and advertising networks. 

[![Builtwith screenshot](https://publishing-platform-legacy.whoisxmlapi.com/wordpress/wp-content/uploads/2025/07/built-with-1024x700.png)](https://publishing-platform-legacy.whoisxmlapi.com/wordpress/wp-content/uploads/2025/07/built-with.png)

BuiltWith’s features include:

*   A database with more than 108,000 web technologies.
*   Tracking the historical usage of technologies on a website.
*   Integrations with several third-party vendors, although most are sales- and marketing-related.

BuiltWith is a commercial tool, but individual website lookups are free and don’t even require registration. The paid plans allow you to get lists of websites built using a certain technology. 

**2\. Netcraft’s Site Report** 

[Netcraft's Site Report](http://sitereport.netcraft.com/) provides a detailed security and technology overview of any website, leveraging Netcraft's internet data mining and cybercrime monitoring capabilities. It lets investigators see that website’s hosting information, site popularity, network details, and various security-related configurations, including SSL/TLS, SPF, and DMARC records.

[![Netcraft's Site Report screenshot](https://publishing-platform-legacy.whoisxmlapi.com/wordpress/wp-content/uploads/2025/07/netcraft-site-report-1024x721.png)](https://publishing-platform-legacy.whoisxmlapi.com/wordpress/wp-content/uploads/2025/07/netcraft-site-report.png)

Its key features are:

*   Netcraft’s Site Report includes critical security aspects like SSL/TLS certificate details, HTTP security headers (e.g., X-Frame-Options, CSP), and email authentication records (SPF, DMARC).
*   The site report provides context related to the site's hosting, age, and reputation, which can indicate phishing or malicious intent.
*   It tracks changes in a website's hosting provider, IP address, and nameservers over time.
*   An option to report a suspicious website that is easily accessible from the site report page. 

Netcraft’s Site Report is completely free. Netcraft also offers paid products that allow users to find similar websites.

**Threat Intelligence** Tools
-----------------------------

**1\. AlienVault's Open Threat Exchange (OTX)**

[OTX](https://otx.alienvault.com/) is a free, community-powered threat intelligence sharing platform where security professionals collaborate to share information about the latest threats. You can find information about indicators of compromise (IoCs), malware families, and adversaries, as well as browse threat intelligence by industry.

[![Alienvault OTX screenshot](https://publishing-platform-legacy.whoisxmlapi.com/wordpress/wp-content/uploads/2025/07/alienvault-otx-1024x446.png)](https://publishing-platform-legacy.whoisxmlapi.com/wordpress/wp-content/uploads/2025/07/alienvault-otx.png)

Its key features are:

*   Threat intelligence is organized into "Pulses," which are curated lists of IoCs with a summary of a specific threat, its impact, and the targeted software.
*   OTX allows users to automatically integrate shared IoCs into their security infrastructure (e.g., SIEMs, firewalls) via APIs.
*   It supports a wide range of IoC types, including IP addresses, domains, URLs, file hashes (MD5, SHA-1, SHA-256), and email addresses.

Unlike many commercial threat intelligence feeds, OTX provides free and open access to a wealth of real-time threat data.

**2\. WhoisXML API’s Threat Intelligence API** 

The [Threat Intelligence API](https://threat-intelligence.whoisxmlapi.com/api) allows investigators to find threat information about any domain, URL, IP address, CIDR number, or hash identified as IoCs. It also accepts wildcard queries, allowing you to see if any IoC uses the search term. 

[![WhoisXML API's Threat Intelligence API](https://publishing-platform-legacy.whoisxmlapi.com/wordpress/wp-content/uploads/2025/07/whoisxmlapi-threat-intelligence-api-1024x536.png)](https://publishing-platform-legacy.whoisxmlapi.com/wordpress/wp-content/uploads/2025/07/whoisxmlapi-threat-intelligence-api.png)

The key features of WhoisXML API’s Threat Intelligence API are:

*   Seamless integration since query responses come in standardized XML and JSON formats.
*   Various data sources, including honeypots, server logs, OSINT data sources, and ISP abuse reports.
*   Covers several types of threats, including cyberattacks, botnet usage, C&C, malware, phishing, spamming, Tor usage, and suspicious activities.
*   Supports several IoC types, such as domain, URL, IP address, CIDR, and hash.

Like most of WhoisXML API’s tools, the Threat Intelligence API is not entirely free, but offers a certain free monthly credit allowance that the user can employ to try it out (and enough to support small-scale investigations).

**3\. VirusTotal**

[VirusTotal](https://www.virustotal.com/gui/home/upload) is a free online service that analyzes suspicious files, URLs, domains, and IP addresses against more than 70 antivirus scanners and threat intelligence blacklisting services. Users can just scan a suspicious resource to see if any of the threat engines have reported it to be malicious.

[![VirusTotal screenshot](https://publishing-platform-legacy.whoisxmlapi.com/wordpress/wp-content/uploads/2025/07/virus-total-osint-tools-1024x485.png)](https://publishing-platform-legacy.whoisxmlapi.com/wordpress/wp-content/uploads/2025/07/virus-total-osint-tools.png)

Its key features are:

*   Allows registered users to comment on indicators and share valuable context that enriches the analysis for other users and helps identify false positives or negatives.
*   Its relationship graph enables users to visualize the connections between files, URLs, domains, and IP addresses.
*   Aside from threat detection, VirusTotal provides WHOIS registration data and Google search results.

VirusTotal is free to use, but offers premium services such as an API or YARA rules matching.

**Domain Intelligence** Tools
-----------------------------

**1\. WhoisXML API’s WHOIS History** 

WhoisXML API’s [WHOIS History](https://whois-history.whoisxmlapi.com/) provides access to billions of historical WHOIS records for domains, which allows investigators to track ownership changes, registration details, and contact information over time. 

[![WhoisXML API's Whois History screenshot](https://publishing-platform-legacy.whoisxmlapi.com/wordpress/wp-content/uploads/2025/07/whoisxmlapi-whois-history-lookup-osint-1024x572.png)](https://publishing-platform-legacy.whoisxmlapi.com/wordpress/wp-content/uploads/2025/07/whoisxmlapi-whois-history-lookup-osint.png)

WhoisXML API’s WHOIS History standout features include:

*   Multiple data consumption models, including via [API](https://whois-history.whoisxmlapi.com/api), [web-based lookup tool](https://whois-history.whoisxmlapi.com/lookup), and a full [database](https://whois-history.whoisxmlapi.com/database).
*   For older websites, the tool gives access to WHOIS records from before the GDPR implementation that led to widespread redaction of registrant information, often allowing users to find website owner contact information. 
*   The database is updated daily, ensuring that the information includes the latest records.
*   It’s easy to integrate into workflows thanks to  standardized JSON and XML output formats.

WHOIS History is a commercial product, but 500 free API credits are available upon signup.

**2\. WhoisXML API’s DNS History**

WhoisXML API’s [DNS history](https://dns-history.whoisxmlapi.com/) products include the [DNS Chronicle API](https://dns-history.whoisxmlapi.com/api), a web-based [lookup tool](https://dns-history.whoisxmlapi.com/lookup), and a [DNS database download](https://dns-history.whoisxmlapi.com/database). They enable investigators to perform both forward and reverse historical DNS searches. Forward lookups allow users to access a log of past DNS configurations for a given domain, including changes to IP addresses, nameservers, mail servers, and other DNS records (some record types are only available in the database download option). Reverse DNS searches for an IP address return a list of all connected FQDNs. 

[![WhoisXML API's DNS History screenshot](https://publishing-platform-legacy.whoisxmlapi.com/wordpress/wp-content/uploads/2025/07/osint-tools-dns-history-1024x577.png)](https://publishing-platform-legacy.whoisxmlapi.com/wordpress/wp-content/uploads/2025/07/osint-tools-dns-history.png)

DNS Chronicle’s key features are:

*   Provides access to hundreds of billions of historical DNS records.
*   Offers a detailed timeline of a domain's DNS activity, arranged in chronological order.
*   Aggregates passive DNS data, which is collected from sensors worldwide, and records DNS resolutions over time.
*   Like WHOIS History, WhoisXML API offers flexible DNS history access via API integration or database downloads.

Like with other WhoisXML API tools, DNS Chronicle is commercial, but 500 free API credits are available upon signup and can be used both for web lookups and API access.

**3\. WhoisXML API’s IP Geolocation API**

[IP Geolocation API](https://ip-geolocation.whoisxmlapi.com/api) is also a product of WhoisXML API, which adds geographical and network context to any given IPv4 or IPv6 address, including its country, region, city, postal code, precise coordinates, and time zone. It also reveals information about the internet service provider (ISP), autonomous system (AS) details, and associated domain names for that IP address.

[![WhoisXML API's IP Geolocation lookup screenshot](https://publishing-platform-legacy.whoisxmlapi.com/wordpress/wp-content/uploads/2025/07/ip-geolocation-api-osint-1024x578.png)](https://publishing-platform-legacy.whoisxmlapi.com/wordpress/wp-content/uploads/2025/07/ip-geolocation-api-osint.png)

Its key features include:

*   99.5% IP address coverage for both IPv4 and IPv6, across hundreds of thousands of unique locations worldwide.
*   Provides very specific location data, including latitude, longitude, and postal codes, not just country or city.
*   There’s an option to include up to five domain names associated with the target IP address.

You automatically get a free subscription plan limited to 1,000 queries after signing up.

**4\. WhoisXML API’s Subdomains Lookup** 

[Subdomains Lookup](https://subdomains.whoisxmlapi.com/) is a simple subdomain enumeration tool that comes in the form of a [web-based lookup](https://subdomains.whoisxmlapi.com/lookup)**,** an [API](https://subdomains.whoisxmlapi.com/api), and a [subdomain database](https://subdomains.whoisxmlapi.com/database). 

It works in a very straightforward way – you enter a domain name, it looks up all the subdomains that domain has.

[![WhoisXML API's subdomains lookup screenshot](https://publishing-platform-legacy.whoisxmlapi.com/wordpress/wp-content/uploads/2025/07/subdomains-lookup-1024x848.png)](https://publishing-platform-legacy.whoisxmlapi.com/wordpress/wp-content/uploads/2025/07/subdomains-lookup.png)

Its key features include:

*   A subdomain database that comprises over 9.6+ billion records.
*   Over 15 million subdomains discovered daily.
*   Addition of date first seen and date of last update for each subdomain that helps identify inactive subdomains.

Just like with most other tools that WhoisXML API offers, you receive 500 free API credits upon signup.
