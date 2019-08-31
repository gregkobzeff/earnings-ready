

//https://datahub.io/core/s-and-p-500-companies#data
//http://www.convertcsv.com/csv-to-json.htm
let companies = [
  {
    "symbol": "MMM",
    "name": "3M Company",
    "sector": "Industrials"
  },
  {
    "symbol": "AOS",
    "name": "A.O. Smith Corp",
    "sector": "Industrials"
  },
  {
    "symbol": "ABT",
    "name": "Abbott Laboratories",
    "sector": "Health Care"
  },
  {
    "symbol": "ABBV",
    "name": "AbbVie Inc.",
    "sector": "Health Care"
  },
  {
    "symbol": "ACN",
    "name": "Accenture plc",
    "sector": "Information Technology"
  },
  {
    "symbol": "ATVI",
    "name": "Activision Blizzard",
    "sector": "Information Technology"
  },
  {
    "symbol": "AYI",
    "name": "Acuity Brands Inc",
    "sector": "Industrials"
  },
  {
    "symbol": "ADBE",
    "name": "Adobe Systems Inc",
    "sector": "Information Technology"
  },
  {
    "symbol": "AAP",
    "name": "Advance Auto Parts",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "AMD",
    "name": "Advanced Micro Devices Inc",
    "sector": "Information Technology"
  },
  {
    "symbol": "AES",
    "name": "AES Corp",
    "sector": "Utilities"
  },
  {
    "symbol": "AET",
    "name": "Aetna Inc",
    "sector": "Health Care"
  },
  {
    "symbol": "AMG",
    "name": "Affiliated Managers Group Inc",
    "sector": "Financials"
  },
  {
    "symbol": "AFL",
    "name": "AFLAC Inc",
    "sector": "Financials"
  },
  {
    "symbol": "A",
    "name": "Agilent Technologies Inc",
    "sector": "Health Care"
  },
  {
    "symbol": "APD",
    "name": "Air Products & Chemicals Inc",
    "sector": "Materials"
  },
  {
    "symbol": "AKAM",
    "name": "Akamai Technologies Inc",
    "sector": "Information Technology"
  },
  {
    "symbol": "ALK",
    "name": "Alaska Air Group Inc",
    "sector": "Industrials"
  },
  {
    "symbol": "ALB",
    "name": "Albemarle Corp",
    "sector": "Materials"
  },
  {
    "symbol": "ARE",
    "name": "Alexandria Real Estate Equities Inc",
    "sector": "Real Estate"
  },
  {
    "symbol": "ALXN",
    "name": "Alexion Pharmaceuticals",
    "sector": "Health Care"
  },
  {
    "symbol": "ALGN",
    "name": "Align Technology",
    "sector": "Health Care"
  },
  {
    "symbol": "ALLE",
    "name": "Allegion",
    "sector": "Industrials"
  },
  {
    "symbol": "AGN",
    "name": "Allergan, Plc",
    "sector": "Health Care"
  },
  {
    "symbol": "ADS",
    "name": "Alliance Data Systems",
    "sector": "Information Technology"
  },
  {
    "symbol": "LNT",
    "name": "Alliant Energy Corp",
    "sector": "Utilities"
  },
  {
    "symbol": "ALL",
    "name": "Allstate Corp",
    "sector": "Financials"
  },
  {
    "symbol": "GOOGL",
    "name": "Alphabet Inc Class A",
    "sector": "Information Technology"
  },
  {
    "symbol": "GOOG",
    "name": "Alphabet Inc Class C",
    "sector": "Information Technology"
  },
  {
    "symbol": "MO",
    "name": "Altria Group Inc",
    "sector": "Consumer Staples"
  },
  {
    "symbol": "AMZN",
    "name": "Amazon.com Inc.",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "AEE",
    "name": "Ameren Corp",
    "sector": "Utilities"
  },
  {
    "symbol": "AAL",
    "name": "American Airlines Group",
    "sector": "Industrials"
  },
  {
    "symbol": "AEP",
    "name": "American Electric Power",
    "sector": "Utilities"
  },
  {
    "symbol": "AXP",
    "name": "American Express Co",
    "sector": "Financials"
  },
  {
    "symbol": "AIG",
    "name": "American International Group, Inc.",
    "sector": "Financials"
  },
  {
    "symbol": "AMT",
    "name": "American Tower Corp A",
    "sector": "Real Estate"
  },
  {
    "symbol": "AWK",
    "name": "American Water Works Company Inc",
    "sector": "Utilities"
  },
  {
    "symbol": "AMP",
    "name": "Ameriprise Financial",
    "sector": "Financials"
  },
  {
    "symbol": "ABC",
    "name": "AmerisourceBergen Corp",
    "sector": "Health Care"
  },
  {
    "symbol": "AME",
    "name": "AMETEK Inc.",
    "sector": "Industrials"
  },
  {
    "symbol": "AMGN",
    "name": "Amgen Inc.",
    "sector": "Health Care"
  },
  {
    "symbol": "APH",
    "name": "Amphenol Corp",
    "sector": "Information Technology"
  },
  {
    "symbol": "APC",
    "name": "Anadarko Petroleum Corp",
    "sector": "Energy"
  },
  {
    "symbol": "ADI",
    "name": "Analog Devices, Inc.",
    "sector": "Information Technology"
  },
  {
    "symbol": "ANDV",
    "name": "Andeavor",
    "sector": "Energy"
  },
  {
    "symbol": "ANSS",
    "name": "ANSYS",
    "sector": "Information Technology"
  },
  {
    "symbol": "ANTM",
    "name": "Anthem Inc.",
    "sector": "Health Care"
  },
  {
    "symbol": "AON",
    "name": "Aon plc",
    "sector": "Financials"
  },
  {
    "symbol": "APA",
    "name": "Apache Corporation",
    "sector": "Energy"
  },
  {
    "symbol": "AIV",
    "name": "Apartment Investment & Management",
    "sector": "Real Estate"
  },
  {
    "symbol": "AAPL",
    "name": "Apple Inc.",
    "sector": "Information Technology"
  },
  {
    "symbol": "AMAT",
    "name": "Applied Materials Inc.",
    "sector": "Information Technology"
  },
  {
    "symbol": "APTV",
    "name": "Aptiv Plc",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "ADM",
    "name": "Archer-Daniels-Midland Co",
    "sector": "Consumer Staples"
  },
  {
    "symbol": "ARNC",
    "name": "Arconic Inc.",
    "sector": "Industrials"
  },
  {
    "symbol": "AJG",
    "name": "Arthur J. Gallagher & Co.",
    "sector": "Financials"
  },
  {
    "symbol": "AIZ",
    "name": "Assurant Inc.",
    "sector": "Financials"
  },
  {
    "symbol": "T",
    "name": "AT&T Inc.",
    "sector": "Telecommunication Services"
  },
  {
    "symbol": "ADSK",
    "name": "Autodesk Inc.",
    "sector": "Information Technology"
  },
  {
    "symbol": "ADP",
    "name": "Automatic Data Processing",
    "sector": "Information Technology"
  },
  {
    "symbol": "AZO",
    "name": "AutoZone Inc",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "AVB",
    "name": "AvalonBay Communities, Inc.",
    "sector": "Real Estate"
  },
  {
    "symbol": "AVY",
    "name": "Avery Dennison Corp",
    "sector": "Materials"
  },
  {
    "symbol": "BHGE",
    "name": "Baker Hughes, a GE Company",
    "sector": "Energy"
  },
  {
    "symbol": "BLL",
    "name": "Ball Corp",
    "sector": "Materials"
  },
  {
    "symbol": "BAC",
    "name": "Bank of America Corp",
    "sector": "Financials"
  },
  {
    "symbol": "BAX",
    "name": "Baxter International Inc.",
    "sector": "Health Care"
  },
  {
    "symbol": "BBT",
    "name": "BB&T Corporation",
    "sector": "Financials"
  },
  {
    "symbol": "BDX",
    "name": "Becton Dickinson",
    "sector": "Health Care"
  },
  {
    "symbol": "BRK.B",
    "name": "Berkshire Hathaway",
    "sector": "Financials"
  },
  {
    "symbol": "BBY",
    "name": "Best Buy Co. Inc.",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "BIIB",
    "name": "Biogen Inc.",
    "sector": "Health Care"
  },
  {
    "symbol": "BLK",
    "name": "BlackRock",
    "sector": "Financials"
  },
  {
    "symbol": "HRB",
    "name": "Block H&R",
    "sector": "Financials"
  },
  {
    "symbol": "BA",
    "name": "Boeing Company",
    "sector": "Industrials"
  },
  {
    "symbol": "BKNG",
    "name": "Booking Holdings Inc",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "BWA",
    "name": "BorgWarner",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "BXP",
    "name": "Boston Properties",
    "sector": "Real Estate"
  },
  {
    "symbol": "BSX",
    "name": "Boston Scientific",
    "sector": "Health Care"
  },
  {
    "symbol": "BHF",
    "name": "Brighthouse Financial Inc",
    "sector": "Financials"
  },
  {
    "symbol": "BMY",
    "name": "Bristol-Myers Squibb",
    "sector": "Health Care"
  },
  {
    "symbol": "AVGO",
    "name": "Broadcom",
    "sector": "Information Technology"
  },
  {
    "symbol": "BF.B",
    "name": "Brown-Forman Corp.",
    "sector": "Consumer Staples"
  },
  {
    "symbol": "CHRW",
    "name": "C. H. Robinson Worldwide",
    "sector": "Industrials"
  },
  {
    "symbol": "CA",
    "name": "CA, Inc.",
    "sector": "Information Technology"
  },
  {
    "symbol": "COG",
    "name": "Cabot Oil & Gas",
    "sector": "Energy"
  },
  {
    "symbol": "CDNS",
    "name": "Cadence Design Systems",
    "sector": "Information Technology"
  },
  {
    "symbol": "CPB",
    "name": "Campbell Soup",
    "sector": "Consumer Staples"
  },
  {
    "symbol": "COF",
    "name": "Capital One Financial",
    "sector": "Financials"
  },
  {
    "symbol": "CAH",
    "name": "Cardinal Health Inc.",
    "sector": "Health Care"
  },
  {
    "symbol": "KMX",
    "name": "Carmax Inc",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "CCL",
    "name": "Carnival Corp.",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "CAT",
    "name": "Caterpillar Inc.",
    "sector": "Industrials"
  },
  {
    "symbol": "CBOE",
    "name": "Cboe Global Markets",
    "sector": "Financials"
  },
  {
    "symbol": "CBRE",
    "name": "CBRE Group",
    "sector": "Real Estate"
  },
  {
    "symbol": "CBS",
    "name": "CBS Corp.",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "CELG",
    "name": "Celgene Corp.",
    "sector": "Health Care"
  },
  {
    "symbol": "CNC",
    "name": "Centene Corporation",
    "sector": "Health Care"
  },
  {
    "symbol": "CNP",
    "name": "CenterPoint Energy",
    "sector": "Utilities"
  },
  {
    "symbol": "CTL",
    "name": "CenturyLink Inc",
    "sector": "Telecommunication Services"
  },
  {
    "symbol": "CERN",
    "name": "Cerner",
    "sector": "Health Care"
  },
  {
    "symbol": "CF",
    "name": "CF Industries Holdings Inc",
    "sector": "Materials"
  },
  {
    "symbol": "SCHW",
    "name": "Charles Schwab Corporation",
    "sector": "Financials"
  },
  {
    "symbol": "CHTR",
    "name": "Charter Communications",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "CVX",
    "name": "Chevron Corp.",
    "sector": "Energy"
  },
  {
    "symbol": "CMG",
    "name": "Chipotle Mexican Grill",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "CB",
    "name": "Chubb Limited",
    "sector": "Financials"
  },
  {
    "symbol": "CHD",
    "name": "Church & Dwight",
    "sector": "Consumer Staples"
  },
  {
    "symbol": "CI",
    "name": "CIGNA Corp.",
    "sector": "Health Care"
  },
  {
    "symbol": "XEC",
    "name": "Cimarex Energy",
    "sector": "Energy"
  },
  {
    "symbol": "CINF",
    "name": "Cincinnati Financial",
    "sector": "Financials"
  },
  {
    "symbol": "CTAS",
    "name": "Cintas Corporation",
    "sector": "Industrials"
  },
  {
    "symbol": "CSCO",
    "name": "Cisco Systems",
    "sector": "Information Technology"
  },
  {
    "symbol": "C",
    "name": "Citigroup Inc.",
    "sector": "Financials"
  },
  {
    "symbol": "CFG",
    "name": "Citizens Financial Group",
    "sector": "Financials"
  },
  {
    "symbol": "CTXS",
    "name": "Citrix Systems",
    "sector": "Information Technology"
  },
  {
    "symbol": "CME",
    "name": "CME Group Inc.",
    "sector": "Financials"
  },
  {
    "symbol": "CMS",
    "name": "CMS Energy",
    "sector": "Utilities"
  },
  {
    "symbol": "KO",
    "name": "Coca-Cola Company (The)",
    "sector": "Consumer Staples"
  },
  {
    "symbol": "CTSH",
    "name": "Cognizant Technology Solutions",
    "sector": "Information Technology"
  },
  {
    "symbol": "CL",
    "name": "Colgate-Palmolive",
    "sector": "Consumer Staples"
  },
  {
    "symbol": "CMCSA",
    "name": "Comcast Corp.",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "CMA",
    "name": "Comerica Inc.",
    "sector": "Financials"
  },
  {
    "symbol": "CAG",
    "name": "Conagra Brands",
    "sector": "Consumer Staples"
  },
  {
    "symbol": "CXO",
    "name": "Concho Resources",
    "sector": "Energy"
  },
  {
    "symbol": "COP",
    "name": "ConocoPhillips",
    "sector": "Energy"
  },
  {
    "symbol": "ED",
    "name": "Consolidated Edison",
    "sector": "Utilities"
  },
  {
    "symbol": "STZ",
    "name": "Constellation Brands",
    "sector": "Consumer Staples"
  },
  {
    "symbol": "GLW",
    "name": "Corning Inc.",
    "sector": "Information Technology"
  },
  {
    "symbol": "COST",
    "name": "Costco Wholesale Corp.",
    "sector": "Consumer Staples"
  },
  {
    "symbol": "COTY",
    "name": "Coty, Inc",
    "sector": "Consumer Staples"
  },
  {
    "symbol": "CCI",
    "name": "Crown Castle International Corp.",
    "sector": "Real Estate"
  },
  {
    "symbol": "CSRA",
    "name": "CSRA Inc.",
    "sector": "Information Technology"
  },
  {
    "symbol": "CSX",
    "name": "CSX Corp.",
    "sector": "Industrials"
  },
  {
    "symbol": "CMI",
    "name": "Cummins Inc.",
    "sector": "Industrials"
  },
  {
    "symbol": "CVS",
    "name": "CVS Health",
    "sector": "Consumer Staples"
  },
  {
    "symbol": "DHI",
    "name": "D. R. Horton",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "DHR",
    "name": "Danaher Corp.",
    "sector": "Health Care"
  },
  {
    "symbol": "DRI",
    "name": "Darden Restaurants",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "DVA",
    "name": "DaVita Inc.",
    "sector": "Health Care"
  },
  {
    "symbol": "DE",
    "name": "Deere & Co.",
    "sector": "Industrials"
  },
  {
    "symbol": "DAL",
    "name": "Delta Air Lines Inc.",
    "sector": "Industrials"
  },
  {
    "symbol": "XRAY",
    "name": "Dentsply Sirona",
    "sector": "Health Care"
  },
  {
    "symbol": "DVN",
    "name": "Devon Energy Corp.",
    "sector": "Energy"
  },
  {
    "symbol": "DLR",
    "name": "Digital Realty Trust Inc",
    "sector": "Real Estate"
  },
  {
    "symbol": "DFS",
    "name": "Discover Financial Services",
    "sector": "Financials"
  },
  {
    "symbol": "DISCA",
    "name": "Discovery Inc. Class A",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "DISCK",
    "name": "Discovery Inc. Class C",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "DISH",
    "name": "Dish Network",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "DG",
    "name": "Dollar General",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "DLTR",
    "name": "Dollar Tree",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "D",
    "name": "Dominion Energy",
    "sector": "Utilities"
  },
  {
    "symbol": "DOV",
    "name": "Dover Corp.",
    "sector": "Industrials"
  },
  {
    "symbol": "DWDP",
    "name": "DowDuPont",
    "sector": "Materials"
  },
  {
    "symbol": "DPS",
    "name": "Dr Pepper Snapple Group",
    "sector": "Consumer Staples"
  },
  {
    "symbol": "DTE",
    "name": "DTE Energy Co.",
    "sector": "Utilities"
  },
  {
    "symbol": "DUK",
    "name": "Duke Energy",
    "sector": "Utilities"
  },
  {
    "symbol": "DRE",
    "name": "Duke Realty Corp",
    "sector": "Real Estate"
  },
  {
    "symbol": "DXC",
    "name": "DXC Technology",
    "sector": "Information Technology"
  },
  {
    "symbol": "ETFC",
    "name": "E*Trade",
    "sector": "Financials"
  },
  {
    "symbol": "EMN",
    "name": "Eastman Chemical",
    "sector": "Materials"
  },
  {
    "symbol": "ETN",
    "name": "Eaton Corporation",
    "sector": "Industrials"
  },
  {
    "symbol": "EBAY",
    "name": "eBay Inc.",
    "sector": "Information Technology"
  },
  {
    "symbol": "ECL",
    "name": "Ecolab Inc.",
    "sector": "Materials"
  },
  {
    "symbol": "EIX",
    "name": "Edison Int'l",
    "sector": "Utilities"
  },
  {
    "symbol": "EW",
    "name": "Edwards Lifesciences",
    "sector": "Health Care"
  },
  {
    "symbol": "EA",
    "name": "Electronic Arts",
    "sector": "Information Technology"
  },
  {
    "symbol": "EMR",
    "name": "Emerson Electric Company",
    "sector": "Industrials"
  },
  {
    "symbol": "ETR",
    "name": "Entergy Corp.",
    "sector": "Utilities"
  },
  {
    "symbol": "EVHC",
    "name": "Envision Healthcare",
    "sector": "Health Care"
  },
  {
    "symbol": "EOG",
    "name": "EOG Resources",
    "sector": "Energy"
  },
  {
    "symbol": "EQT",
    "name": "EQT Corporation",
    "sector": "Energy"
  },
  {
    "symbol": "EFX",
    "name": "Equifax Inc.",
    "sector": "Industrials"
  },
  {
    "symbol": "EQIX",
    "name": "Equinix",
    "sector": "Real Estate"
  },
  {
    "symbol": "EQR",
    "name": "Equity Residential",
    "sector": "Real Estate"
  },
  {
    "symbol": "ESS",
    "name": "Essex Property Trust, Inc.",
    "sector": "Real Estate"
  },
  {
    "symbol": "EL",
    "name": "Estee Lauder Cos.",
    "sector": "Consumer Staples"
  },
  {
    "symbol": "RE",
    "name": "Everest Re Group Ltd.",
    "sector": "Financials"
  },
  {
    "symbol": "ES",
    "name": "Eversource Energy",
    "sector": "Utilities"
  },
  {
    "symbol": "EXC",
    "name": "Exelon Corp.",
    "sector": "Utilities"
  },
  {
    "symbol": "EXPE",
    "name": "Expedia Inc.",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "EXPD",
    "name": "Expeditors International",
    "sector": "Industrials"
  },
  {
    "symbol": "ESRX",
    "name": "Express Scripts",
    "sector": "Health Care"
  },
  {
    "symbol": "EXR",
    "name": "Extra Space Storage",
    "sector": "Real Estate"
  },
  {
    "symbol": "XOM",
    "name": "Exxon Mobil Corp.",
    "sector": "Energy"
  },
  {
    "symbol": "FFIV",
    "name": "F5 Networks",
    "sector": "Information Technology"
  },
  {
    "symbol": "FB",
    "name": "Facebook, Inc.",
    "sector": "Information Technology"
  },
  {
    "symbol": "FAST",
    "name": "Fastenal Co",
    "sector": "Industrials"
  },
  {
    "symbol": "FRT",
    "name": "Federal Realty Investment Trust",
    "sector": "Real Estate"
  },
  {
    "symbol": "FDX",
    "name": "FedEx Corporation",
    "sector": "Industrials"
  },
  {
    "symbol": "FIS",
    "name": "Fidelity National Information Services",
    "sector": "Information Technology"
  },
  {
    "symbol": "FITB",
    "name": "Fifth Third Bancorp",
    "sector": "Financials"
  },
  {
    "symbol": "FE",
    "name": "FirstEnergy Corp",
    "sector": "Utilities"
  },
  {
    "symbol": "FISV",
    "name": "Fiserv Inc",
    "sector": "Information Technology"
  },
  {
    "symbol": "FLIR",
    "name": "FLIR Systems",
    "sector": "Information Technology"
  },
  {
    "symbol": "FLS",
    "name": "Flowserve Corporation",
    "sector": "Industrials"
  },
  {
    "symbol": "FLR",
    "name": "Fluor Corp.",
    "sector": "Industrials"
  },
  {
    "symbol": "FMC",
    "name": "FMC Corporation",
    "sector": "Materials"
  },
  {
    "symbol": "FL",
    "name": "Foot Locker Inc",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "F",
    "name": "Ford Motor",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "FTV",
    "name": "Fortive Corp",
    "sector": "Industrials"
  },
  {
    "symbol": "FBHS",
    "name": "Fortune Brands Home & Security",
    "sector": "Industrials"
  },
  {
    "symbol": "BEN",
    "name": "Franklin Resources",
    "sector": "Financials"
  },
  {
    "symbol": "FCX",
    "name": "Freeport-McMoRan Inc.",
    "sector": "Materials"
  },
  {
    "symbol": "GPS",
    "name": "Gap Inc.",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "GRMN",
    "name": "Garmin Ltd.",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "IT",
    "name": "Gartner Inc",
    "sector": "Information Technology"
  },
  {
    "symbol": "GD",
    "name": "General Dynamics",
    "sector": "Industrials"
  },
  {
    "symbol": "GE",
    "name": "General Electric",
    "sector": "Industrials"
  },
  {
    "symbol": "GGP",
    "name": "General Growth Properties Inc.",
    "sector": "Real Estate"
  },
  {
    "symbol": "GIS",
    "name": "General Mills",
    "sector": "Consumer Staples"
  },
  {
    "symbol": "GM",
    "name": "General Motors",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "GPC",
    "name": "Genuine Parts",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "GILD",
    "name": "Gilead Sciences",
    "sector": "Health Care"
  },
  {
    "symbol": "GPN",
    "name": "Global Payments Inc.",
    "sector": "Information Technology"
  },
  {
    "symbol": "GS",
    "name": "Goldman Sachs Group",
    "sector": "Financials"
  },
  {
    "symbol": "GT",
    "name": "Goodyear Tire & Rubber",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "GWW",
    "name": "Grainger (W.W.) Inc.",
    "sector": "Industrials"
  },
  {
    "symbol": "HAL",
    "name": "Halliburton Co.",
    "sector": "Energy"
  },
  {
    "symbol": "HBI",
    "name": "Hanesbrands Inc",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "HOG",
    "name": "Harley-Davidson",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "HRS",
    "name": "Harris Corporation",
    "sector": "Information Technology"
  },
  {
    "symbol": "HIG",
    "name": "Hartford Financial Svc.Gp.",
    "sector": "Financials"
  },
  {
    "symbol": "HAS",
    "name": "Hasbro Inc.",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "HCA",
    "name": "HCA Holdings",
    "sector": "Health Care"
  },
  {
    "symbol": "HCP",
    "name": "HCP Inc.",
    "sector": "Real Estate"
  },
  {
    "symbol": "HP",
    "name": "Helmerich & Payne",
    "sector": "Energy"
  },
  {
    "symbol": "HSIC",
    "name": "Henry Schein",
    "sector": "Health Care"
  },
  {
    "symbol": "HES",
    "name": "Hess Corporation",
    "sector": "Energy"
  },
  {
    "symbol": "HPE",
    "name": "Hewlett Packard Enterprise",
    "sector": "Information Technology"
  },
  {
    "symbol": "HLT",
    "name": "Hilton Worldwide Holdings Inc",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "HOLX",
    "name": "Hologic",
    "sector": "Health Care"
  },
  {
    "symbol": "HD",
    "name": "Home Depot",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "HON",
    "name": "Honeywell Int'l Inc.",
    "sector": "Industrials"
  },
  {
    "symbol": "HRL",
    "name": "Hormel Foods Corp.",
    "sector": "Consumer Staples"
  },
  {
    "symbol": "HST",
    "name": "Host Hotels & Resorts",
    "sector": "Real Estate"
  },
  {
    "symbol": "HPQ",
    "name": "HP Inc.",
    "sector": "Information Technology"
  },
  {
    "symbol": "HUM",
    "name": "Humana Inc.",
    "sector": "Health Care"
  },
  {
    "symbol": "HBAN",
    "name": "Huntington Bancshares",
    "sector": "Financials"
  },
  {
    "symbol": "HII",
    "name": "Huntington Ingalls Industries",
    "sector": "Industrials"
  },
  {
    "symbol": "IDXX",
    "name": "IDEXX Laboratories",
    "sector": "Health Care"
  },
  {
    "symbol": "INFO",
    "name": "IHS Markit Ltd.",
    "sector": "Industrials"
  },
  {
    "symbol": "ITW",
    "name": "Illinois Tool Works",
    "sector": "Industrials"
  },
  {
    "symbol": "ILMN",
    "name": "Illumina Inc",
    "sector": "Health Care"
  },
  {
    "symbol": "INCY",
    "name": "Incyte",
    "sector": "Health Care"
  },
  {
    "symbol": "IR",
    "name": "Ingersoll-Rand PLC",
    "sector": "Industrials"
  },
  {
    "symbol": "INTC",
    "name": "Intel Corp.",
    "sector": "Information Technology"
  },
  {
    "symbol": "ICE",
    "name": "Intercontinental Exchange",
    "sector": "Financials"
  },
  {
    "symbol": "IBM",
    "name": "International Business Machines",
    "sector": "Information Technology"
  },
  {
    "symbol": "IP",
    "name": "International Paper",
    "sector": "Materials"
  },
  {
    "symbol": "IPG",
    "name": "Interpublic Group",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "IFF",
    "name": "Intl Flavors & Fragrances",
    "sector": "Materials"
  },
  {
    "symbol": "INTU",
    "name": "Intuit Inc.",
    "sector": "Information Technology"
  },
  {
    "symbol": "ISRG",
    "name": "Intuitive Surgical Inc.",
    "sector": "Health Care"
  },
  {
    "symbol": "IVZ",
    "name": "Invesco Ltd.",
    "sector": "Financials"
  },
  {
    "symbol": "IPGP",
    "name": "IPG Photonics Corp.",
    "sector": "Information Technology"
  },
  {
    "symbol": "IQV",
    "name": "IQVIA Holdings Inc.",
    "sector": "Health Care"
  },
  {
    "symbol": "IRM",
    "name": "Iron Mountain Incorporated",
    "sector": "Real Estate"
  },
  {
    "symbol": "JBHT",
    "name": "J. B. Hunt Transport Services",
    "sector": "Industrials"
  },
  {
    "symbol": "JEC",
    "name": "Jacobs Engineering Group",
    "sector": "Industrials"
  },
  {
    "symbol": "SJM",
    "name": "JM Smucker",
    "sector": "Consumer Staples"
  },
  {
    "symbol": "JNJ",
    "name": "Johnson & Johnson",
    "sector": "Health Care"
  },
  {
    "symbol": "JCI",
    "name": "Johnson Controls International",
    "sector": "Industrials"
  },
  {
    "symbol": "JPM",
    "name": "JPMorgan Chase & Co.",
    "sector": "Financials"
  },
  {
    "symbol": "JNPR",
    "name": "Juniper Networks",
    "sector": "Information Technology"
  },
  {
    "symbol": "KSU",
    "name": "Kansas City Southern",
    "sector": "Industrials"
  },
  {
    "symbol": "K",
    "name": "Kellogg Co.",
    "sector": "Consumer Staples"
  },
  {
    "symbol": "KEY",
    "name": "KeyCorp",
    "sector": "Financials"
  },
  {
    "symbol": "KMB",
    "name": "Kimberly-Clark",
    "sector": "Consumer Staples"
  },
  {
    "symbol": "KIM",
    "name": "Kimco Realty",
    "sector": "Real Estate"
  },
  {
    "symbol": "KMI",
    "name": "Kinder Morgan",
    "sector": "Energy"
  },
  {
    "symbol": "KLAC",
    "name": "KLA-Tencor Corp.",
    "sector": "Information Technology"
  },
  {
    "symbol": "KSS",
    "name": "Kohl's Corp.",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "KHC",
    "name": "Kraft Heinz Co",
    "sector": "Consumer Staples"
  },
  {
    "symbol": "KR",
    "name": "Kroger Co.",
    "sector": "Consumer Staples"
  },
  {
    "symbol": "LB",
    "name": "L Brands Inc.",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "LLL",
    "name": "L-3 Communications Holdings",
    "sector": "Industrials"
  },
  {
    "symbol": "LH",
    "name": "Laboratory Corp. of America Holding",
    "sector": "Health Care"
  },
  {
    "symbol": "LRCX",
    "name": "Lam Research",
    "sector": "Information Technology"
  },
  {
    "symbol": "LEG",
    "name": "Leggett & Platt",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "LEN",
    "name": "Lennar Corp.",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "LUK",
    "name": "Leucadia National Corp.",
    "sector": "Financials"
  },
  {
    "symbol": "LLY",
    "name": "Lilly (Eli) & Co.",
    "sector": "Health Care"
  },
  {
    "symbol": "LNC",
    "name": "Lincoln National",
    "sector": "Financials"
  },
  {
    "symbol": "LKQ",
    "name": "LKQ Corporation",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "LMT",
    "name": "Lockheed Martin Corp.",
    "sector": "Industrials"
  },
  {
    "symbol": "L",
    "name": "Loews Corp.",
    "sector": "Financials"
  },
  {
    "symbol": "LOW",
    "name": "Lowe's Cos.",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "LYB",
    "name": "LyondellBasell",
    "sector": "Materials"
  },
  {
    "symbol": "MTB",
    "name": "M&T Bank Corp.",
    "sector": "Financials"
  },
  {
    "symbol": "MAC",
    "name": "Macerich",
    "sector": "Real Estate"
  },
  {
    "symbol": "M",
    "name": "Macy's Inc.",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "MRO",
    "name": "Marathon Oil Corp.",
    "sector": "Energy"
  },
  {
    "symbol": "MPC",
    "name": "Marathon Petroleum",
    "sector": "Energy"
  },
  {
    "symbol": "MAR",
    "name": "Marriott Int'l.",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "MMC",
    "name": "Marsh & McLennan",
    "sector": "Financials"
  },
  {
    "symbol": "MLM",
    "name": "Martin Marietta Materials",
    "sector": "Materials"
  },
  {
    "symbol": "MAS",
    "name": "Masco Corp.",
    "sector": "Industrials"
  },
  {
    "symbol": "MA",
    "name": "Mastercard Inc.",
    "sector": "Information Technology"
  },
  {
    "symbol": "MAT",
    "name": "Mattel Inc.",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "MKC",
    "name": "McCormick & Co.",
    "sector": "Consumer Staples"
  },
  {
    "symbol": "MCD",
    "name": "McDonald's Corp.",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "MCK",
    "name": "McKesson Corp.",
    "sector": "Health Care"
  },
  {
    "symbol": "MDT",
    "name": "Medtronic plc",
    "sector": "Health Care"
  },
  {
    "symbol": "MRK",
    "name": "Merck & Co.",
    "sector": "Health Care"
  },
  {
    "symbol": "MET",
    "name": "MetLife Inc.",
    "sector": "Financials"
  },
  {
    "symbol": "MTD",
    "name": "Mettler Toledo",
    "sector": "Health Care"
  },
  {
    "symbol": "MGM",
    "name": "MGM Resorts International",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "KORS",
    "name": "Michael Kors Holdings",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "MCHP",
    "name": "Microchip Technology",
    "sector": "Information Technology"
  },
  {
    "symbol": "MU",
    "name": "Micron Technology",
    "sector": "Information Technology"
  },
  {
    "symbol": "MSFT",
    "name": "Microsoft Corp.",
    "sector": "Information Technology"
  },
  {
    "symbol": "MAA",
    "name": "Mid-America Apartments",
    "sector": "Real Estate"
  },
  {
    "symbol": "MHK",
    "name": "Mohawk Industries",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "TAP",
    "name": "Molson Coors Brewing Company",
    "sector": "Consumer Staples"
  },
  {
    "symbol": "MDLZ",
    "name": "Mondelez International",
    "sector": "Consumer Staples"
  },
  {
    "symbol": "MON",
    "name": "Monsanto Co.",
    "sector": "Materials"
  },
  {
    "symbol": "MNST",
    "name": "Monster Beverage",
    "sector": "Consumer Staples"
  },
  {
    "symbol": "MCO",
    "name": "Moody's Corp",
    "sector": "Financials"
  },
  {
    "symbol": "MS",
    "name": "Morgan Stanley",
    "sector": "Financials"
  },
  {
    "symbol": "MSI",
    "name": "Motorola Solutions Inc.",
    "sector": "Information Technology"
  },
  {
    "symbol": "MYL",
    "name": "Mylan N.V.",
    "sector": "Health Care"
  },
  {
    "symbol": "NDAQ",
    "name": "Nasdaq, Inc.",
    "sector": "Financials"
  },
  {
    "symbol": "NOV",
    "name": "National Oilwell Varco Inc.",
    "sector": "Energy"
  },
  {
    "symbol": "NAVI",
    "name": "Navient",
    "sector": "Financials"
  },
  {
    "symbol": "NKTR",
    "name": "Nektar Therapeutics",
    "sector": "Health Care"
  },
  {
    "symbol": "NTAP",
    "name": "NetApp",
    "sector": "Information Technology"
  },
  {
    "symbol": "NFLX",
    "name": "Netflix Inc.",
    "sector": "Information Technology"
  },
  {
    "symbol": "NWL",
    "name": "Newell Brands",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "NFX",
    "name": "Newfield Exploration Co",
    "sector": "Energy"
  },
  {
    "symbol": "NEM",
    "name": "Newmont Mining Corporation",
    "sector": "Materials"
  },
  {
    "symbol": "NWSA",
    "name": "News Corp. Class A",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "NWS",
    "name": "News Corp. Class B",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "NEE",
    "name": "NextEra Energy",
    "sector": "Utilities"
  },
  {
    "symbol": "NLSN",
    "name": "Nielsen Holdings",
    "sector": "Industrials"
  },
  {
    "symbol": "NKE",
    "name": "Nike",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "NI",
    "name": "NiSource Inc.",
    "sector": "Utilities"
  },
  {
    "symbol": "NBL",
    "name": "Noble Energy Inc",
    "sector": "Energy"
  },
  {
    "symbol": "JWN",
    "name": "Nordstrom",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "NSC",
    "name": "Norfolk Southern Corp.",
    "sector": "Industrials"
  },
  {
    "symbol": "NTRS",
    "name": "Northern Trust Corp.",
    "sector": "Financials"
  },
  {
    "symbol": "NOC",
    "name": "Northrop Grumman Corp.",
    "sector": "Industrials"
  },
  {
    "symbol": "NCLH",
    "name": "Norwegian Cruise Line",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "NRG",
    "name": "NRG Energy",
    "sector": "Utilities"
  },
  {
    "symbol": "NUE",
    "name": "Nucor Corp.",
    "sector": "Materials"
  },
  {
    "symbol": "NVDA",
    "name": "Nvidia Corporation",
    "sector": "Information Technology"
  },
  {
    "symbol": "ORLY",
    "name": "O'Reilly Automotive",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "OXY",
    "name": "Occidental Petroleum",
    "sector": "Energy"
  },
  {
    "symbol": "OMC",
    "name": "Omnicom Group",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "OKE",
    "name": "ONEOK",
    "sector": "Energy"
  },
  {
    "symbol": "ORCL",
    "name": "Oracle Corp.",
    "sector": "Information Technology"
  },
  {
    "symbol": "PCAR",
    "name": "PACCAR Inc.",
    "sector": "Industrials"
  },
  {
    "symbol": "PKG",
    "name": "Packaging Corporation of America",
    "sector": "Materials"
  },
  {
    "symbol": "PH",
    "name": "Parker-Hannifin",
    "sector": "Industrials"
  },
  {
    "symbol": "PAYX",
    "name": "Paychex Inc.",
    "sector": "Information Technology"
  },
  {
    "symbol": "PYPL",
    "name": "PayPal",
    "sector": "Information Technology"
  },
  {
    "symbol": "PNR",
    "name": "Pentair Ltd.",
    "sector": "Industrials"
  },
  {
    "symbol": "PBCT",
    "name": "People's United Financial",
    "sector": "Financials"
  },
  {
    "symbol": "PEP",
    "name": "PepsiCo Inc.",
    "sector": "Consumer Staples"
  },
  {
    "symbol": "PKI",
    "name": "PerkinElmer",
    "sector": "Health Care"
  },
  {
    "symbol": "PRGO",
    "name": "Perrigo",
    "sector": "Health Care"
  },
  {
    "symbol": "PFE",
    "name": "Pfizer Inc.",
    "sector": "Health Care"
  },
  {
    "symbol": "PCG",
    "name": "PG&E Corp.",
    "sector": "Utilities"
  },
  {
    "symbol": "PM",
    "name": "Philip Morris International",
    "sector": "Consumer Staples"
  },
  {
    "symbol": "PSX",
    "name": "Phillips 66",
    "sector": "Energy"
  },
  {
    "symbol": "PNW",
    "name": "Pinnacle West Capital",
    "sector": "Utilities"
  },
  {
    "symbol": "PXD",
    "name": "Pioneer Natural Resources",
    "sector": "Energy"
  },
  {
    "symbol": "PNC",
    "name": "PNC Financial Services",
    "sector": "Financials"
  },
  {
    "symbol": "RL",
    "name": "Polo Ralph Lauren Corp.",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "PPG",
    "name": "PPG Industries",
    "sector": "Materials"
  },
  {
    "symbol": "PPL",
    "name": "PPL Corp.",
    "sector": "Utilities"
  },
  {
    "symbol": "PX",
    "name": "Praxair Inc.",
    "sector": "Materials"
  },
  {
    "symbol": "PFG",
    "name": "Principal Financial Group",
    "sector": "Financials"
  },
  {
    "symbol": "PG",
    "name": "Procter & Gamble",
    "sector": "Consumer Staples"
  },
  {
    "symbol": "PGR",
    "name": "Progressive Corp.",
    "sector": "Financials"
  },
  {
    "symbol": "PLD",
    "name": "Prologis",
    "sector": "Real Estate"
  },
  {
    "symbol": "PRU",
    "name": "Prudential Financial",
    "sector": "Financials"
  },
  {
    "symbol": "PEG",
    "name": "Public Serv. Enterprise Inc.",
    "sector": "Utilities"
  },
  {
    "symbol": "PSA",
    "name": "Public Storage",
    "sector": "Real Estate"
  },
  {
    "symbol": "PHM",
    "name": "Pulte Homes Inc.",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "PVH",
    "name": "PVH Corp.",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "QRVO",
    "name": "Qorvo",
    "sector": "Information Technology"
  },
  {
    "symbol": "QCOM",
    "name": "QUALCOMM Inc.",
    "sector": "Information Technology"
  },
  {
    "symbol": "PWR",
    "name": "Quanta Services Inc.",
    "sector": "Industrials"
  },
  {
    "symbol": "DGX",
    "name": "Quest Diagnostics",
    "sector": "Health Care"
  },
  {
    "symbol": "RRC",
    "name": "Range Resources Corp.",
    "sector": "Energy"
  },
  {
    "symbol": "RJF",
    "name": "Raymond James Financial Inc.",
    "sector": "Financials"
  },
  {
    "symbol": "RTN",
    "name": "Raytheon Co.",
    "sector": "Industrials"
  },
  {
    "symbol": "O",
    "name": "Realty Income Corporation",
    "sector": "Real Estate"
  },
  {
    "symbol": "RHT",
    "name": "Red Hat Inc.",
    "sector": "Information Technology"
  },
  {
    "symbol": "REG",
    "name": "Regency Centers Corporation",
    "sector": "Real Estate"
  },
  {
    "symbol": "REGN",
    "name": "Regeneron",
    "sector": "Health Care"
  },
  {
    "symbol": "RF",
    "name": "Regions Financial Corp.",
    "sector": "Financials"
  },
  {
    "symbol": "RSG",
    "name": "Republic Services Inc",
    "sector": "Industrials"
  },
  {
    "symbol": "RMD",
    "name": "ResMed",
    "sector": "Health Care"
  },
  {
    "symbol": "RHI",
    "name": "Robert Half International",
    "sector": "Industrials"
  },
  {
    "symbol": "ROK",
    "name": "Rockwell Automation Inc.",
    "sector": "Industrials"
  },
  {
    "symbol": "COL",
    "name": "Rockwell Collins",
    "sector": "Industrials"
  },
  {
    "symbol": "ROP",
    "name": "Roper Technologies",
    "sector": "Industrials"
  },
  {
    "symbol": "ROST",
    "name": "Ross Stores",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "RCL",
    "name": "Royal Caribbean Cruises Ltd",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "SPGI",
    "name": "S&P Global, Inc.",
    "sector": "Financials"
  },
  {
    "symbol": "CRM",
    "name": "Salesforce.com",
    "sector": "Information Technology"
  },
  {
    "symbol": "SBAC",
    "name": "SBA Communications",
    "sector": "Real Estate"
  },
  {
    "symbol": "SCG",
    "name": "SCANA Corp",
    "sector": "Utilities"
  },
  {
    "symbol": "SLB",
    "name": "Schlumberger Ltd.",
    "sector": "Energy"
  },
  {
    "symbol": "STX",
    "name": "Seagate Technology",
    "sector": "Information Technology"
  },
  {
    "symbol": "SEE",
    "name": "Sealed Air",
    "sector": "Materials"
  },
  {
    "symbol": "SRE",
    "name": "Sempra Energy",
    "sector": "Utilities"
  },
  {
    "symbol": "SHW",
    "name": "Sherwin-Williams",
    "sector": "Materials"
  },
  {
    "symbol": "SPG",
    "name": "Simon Property Group Inc",
    "sector": "Real Estate"
  },
  {
    "symbol": "SWKS",
    "name": "Skyworks Solutions",
    "sector": "Information Technology"
  },
  {
    "symbol": "SLG",
    "name": "SL Green Realty",
    "sector": "Real Estate"
  },
  {
    "symbol": "SNA",
    "name": "Snap-On Inc.",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "SO",
    "name": "Southern Co.",
    "sector": "Utilities"
  },
  {
    "symbol": "LUV",
    "name": "Southwest Airlines",
    "sector": "Industrials"
  },
  {
    "symbol": "SWK",
    "name": "Stanley Black & Decker",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "SBUX",
    "name": "Starbucks Corp.",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "STT",
    "name": "State Street Corp.",
    "sector": "Financials"
  },
  {
    "symbol": "SRCL",
    "name": "Stericycle Inc",
    "sector": "Industrials"
  },
  {
    "symbol": "SYK",
    "name": "Stryker Corp.",
    "sector": "Health Care"
  },
  {
    "symbol": "STI",
    "name": "SunTrust Banks",
    "sector": "Financials"
  },
  {
    "symbol": "SIVB",
    "name": "SVB Financial",
    "sector": "Financials"
  },
  {
    "symbol": "SYMC",
    "name": "Symantec Corp.",
    "sector": "Information Technology"
  },
  {
    "symbol": "SYF",
    "name": "Synchrony Financial",
    "sector": "Financials"
  },
  {
    "symbol": "SNPS",
    "name": "Synopsys Inc.",
    "sector": "Information Technology"
  },
  {
    "symbol": "SYY",
    "name": "Sysco Corp.",
    "sector": "Consumer Staples"
  },
  {
    "symbol": "TROW",
    "name": "T. Rowe Price Group",
    "sector": "Financials"
  },
  {
    "symbol": "TTWO",
    "name": "Take-Two Interactive",
    "sector": "Information Technology"
  },
  {
    "symbol": "TPR",
    "name": "Tapestry, Inc.",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "TGT",
    "name": "Target Corp.",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "TEL",
    "name": "TE Connectivity Ltd.",
    "sector": "Information Technology"
  },
  {
    "symbol": "FTI",
    "name": "TechnipFMC",
    "sector": "Energy"
  },
  {
    "symbol": "TXN",
    "name": "Texas Instruments",
    "sector": "Information Technology"
  },
  {
    "symbol": "TXT",
    "name": "Textron Inc.",
    "sector": "Industrials"
  },
  {
    "symbol": "BK",
    "name": "The Bank of New York Mellon Corp.",
    "sector": "Financials"
  },
  {
    "symbol": "CLX",
    "name": "The Clorox Company",
    "sector": "Consumer Staples"
  },
  {
    "symbol": "COO",
    "name": "The Cooper Companies",
    "sector": "Health Care"
  },
  {
    "symbol": "HSY",
    "name": "The Hershey Company",
    "sector": "Consumer Staples"
  },
  {
    "symbol": "MOS",
    "name": "The Mosaic Company",
    "sector": "Materials"
  },
  {
    "symbol": "TRV",
    "name": "The Travelers Companies Inc.",
    "sector": "Financials"
  },
  {
    "symbol": "DIS",
    "name": "The Walt Disney Company",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "TMO",
    "name": "Thermo Fisher Scientific",
    "sector": "Health Care"
  },
  {
    "symbol": "TIF",
    "name": "Tiffany & Co.",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "TWX",
    "name": "Time Warner Inc.",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "TJX",
    "name": "TJX Companies Inc.",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "TMK",
    "name": "Torchmark Corp.",
    "sector": "Financials"
  },
  {
    "symbol": "TSS",
    "name": "Total System Services",
    "sector": "Information Technology"
  },
  {
    "symbol": "TSCO",
    "name": "Tractor Supply Company",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "TDG",
    "name": "TransDigm Group",
    "sector": "Industrials"
  },
  {
    "symbol": "TRIP",
    "name": "TripAdvisor",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "FOXA",
    "name": "Twenty-First Century Fox Class A",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "FOX",
    "name": "Twenty-First Century Fox Class B",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "TSN",
    "name": "Tyson Foods",
    "sector": "Consumer Staples"
  },
  {
    "symbol": "USB",
    "name": "U.S. Bancorp",
    "sector": "Financials"
  },
  {
    "symbol": "UDR",
    "name": "UDR Inc",
    "sector": "Real Estate"
  },
  {
    "symbol": "ULTA",
    "name": "Ulta Beauty",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "UAA",
    "name": "Under Armour Class A",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "UA",
    "name": "Under Armour Class C",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "UNP",
    "name": "Union Pacific",
    "sector": "Industrials"
  },
  {
    "symbol": "UAL",
    "name": "United Continental Holdings",
    "sector": "Industrials"
  },
  {
    "symbol": "UNH",
    "name": "United Health Group Inc.",
    "sector": "Health Care"
  },
  {
    "symbol": "UPS",
    "name": "United Parcel Service",
    "sector": "Industrials"
  },
  {
    "symbol": "URI",
    "name": "United Rentals, Inc.",
    "sector": "Industrials"
  },
  {
    "symbol": "UTX",
    "name": "United Technologies",
    "sector": "Industrials"
  },
  {
    "symbol": "UHS",
    "name": "Universal Health Services, Inc.",
    "sector": "Health Care"
  },
  {
    "symbol": "UNM",
    "name": "Unum Group",
    "sector": "Financials"
  },
  {
    "symbol": "VFC",
    "name": "V.F. Corp.",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "VLO",
    "name": "Valero Energy",
    "sector": "Energy"
  },
  {
    "symbol": "VAR",
    "name": "Varian Medical Systems",
    "sector": "Health Care"
  },
  {
    "symbol": "VTR",
    "name": "Ventas Inc",
    "sector": "Real Estate"
  },
  {
    "symbol": "VRSN",
    "name": "Verisign Inc.",
    "sector": "Information Technology"
  },
  {
    "symbol": "VRSK",
    "name": "Verisk Analytics",
    "sector": "Industrials"
  },
  {
    "symbol": "VZ",
    "name": "Verizon Communications",
    "sector": "Telecommunication Services"
  },
  {
    "symbol": "VRTX",
    "name": "Vertex Pharmaceuticals Inc",
    "sector": "Health Care"
  },
  {
    "symbol": "VIAB",
    "name": "Viacom Inc.",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "V",
    "name": "Visa Inc.",
    "sector": "Information Technology"
  },
  {
    "symbol": "VNO",
    "name": "Vornado Realty Trust",
    "sector": "Real Estate"
  },
  {
    "symbol": "VMC",
    "name": "Vulcan Materials",
    "sector": "Materials"
  },
  {
    "symbol": "WMT",
    "name": "Wal-Mart Stores",
    "sector": "Consumer Staples"
  },
  {
    "symbol": "WBA",
    "name": "Walgreens Boots Alliance",
    "sector": "Consumer Staples"
  },
  {
    "symbol": "WM",
    "name": "Waste Management Inc.",
    "sector": "Industrials"
  },
  {
    "symbol": "WAT",
    "name": "Waters Corporation",
    "sector": "Health Care"
  },
  {
    "symbol": "WEC",
    "name": "Wec Energy Group Inc",
    "sector": "Utilities"
  },
  {
    "symbol": "WFC",
    "name": "Wells Fargo",
    "sector": "Financials"
  },
  {
    "symbol": "WELL",
    "name": "Welltower Inc.",
    "sector": "Real Estate"
  },
  {
    "symbol": "WDC",
    "name": "Western Digital",
    "sector": "Information Technology"
  },
  {
    "symbol": "WU",
    "name": "Western Union Co",
    "sector": "Information Technology"
  },
  {
    "symbol": "WRK",
    "name": "WestRock Company",
    "sector": "Materials"
  },
  {
    "symbol": "WY",
    "name": "Weyerhaeuser Corp.",
    "sector": "Real Estate"
  },
  {
    "symbol": "WHR",
    "name": "Whirlpool Corp.",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "WMB",
    "name": "Williams Cos.",
    "sector": "Energy"
  },
  {
    "symbol": "WLTW",
    "name": "Willis Towers Watson",
    "sector": "Financials"
  },
  {
    "symbol": "WYN",
    "name": "Wyndham Worldwide",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "WYNN",
    "name": "Wynn Resorts Ltd",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "XEL",
    "name": "Xcel Energy Inc",
    "sector": "Utilities"
  },
  {
    "symbol": "XRX",
    "name": "Xerox Corp.",
    "sector": "Information Technology"
  },
  {
    "symbol": "XLNX",
    "name": "Xilinx Inc",
    "sector": "Information Technology"
  },
  {
    "symbol": "XL",
    "name": "XL Capital",
    "sector": "Financials"
  },
  {
    "symbol": "XYL",
    "name": "Xylem Inc.",
    "sector": "Industrials"
  },
  {
    "symbol": "YUM",
    "name": "Yum! Brands Inc",
    "sector": "Consumer Discretionary"
  },
  {
    "symbol": "ZBH",
    "name": "Zimmer Biomet Holdings",
    "sector": "Health Care"
  },
  {
    "symbol": "ZION",
    "name": "Zions Bancorp",
    "sector": "Financials"
  },
  {
    "symbol": "ZTS",
    "name": "Zoetis",
    "sector": "Health Care"
  }
]

companies.sort((a, b) => (a.symbol > b.symbol) ? 1 : -1)

export default class CompanyList {

  static list() {
    return companies;
  }

  static find(index) {
    return companies[index];
  }

  static findBySymbol(symbol) {
    const company = companies.find(c => c.symbol === symbol);
    return company;
  }

}