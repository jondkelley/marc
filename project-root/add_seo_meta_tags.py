#!/usr/bin/env python3
"""
SEO Meta Tags Generator for Marc Asch Law Office Website
This script automatically adds comprehensive SEO meta tags to HTML files.
"""

import os
import re
from pathlib import Path

def generate_seo_meta_tags(filename, page_type, title, description, keywords, image=None):
    """Generate SEO meta tags based on page type and content."""
    
    # Base URL for canonical links
    base_url = "https://marcaschlaw.com"
    
    # Generate meta tags
    meta_tags = f"""    <title>{title}</title>
    
    <!-- SEO Meta Tags -->
    <meta name="description" content="{description}">
    <meta name="keywords" content="{keywords}">
    <meta name="author" content="Marc Asch Law Office">
    <meta name="robots" content="index, follow">
    <meta name="language" content="English">
    <meta name="revisit-after" content="7 days">
    
    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="{title}">
    <meta property="og:description" content="{description}">
    <meta property="og:type" content="website">
    <meta property="og:url" content="{base_url}/{filename}">
    <meta property="og:site_name" content="Marc Asch Law Office">"""
    
    if image:
        meta_tags += f"""
    <meta property="og:image" content="{base_url}/{image}">"""
    else:
        meta_tags += f"""
    <meta property="og:image" content="{base_url}/assets/img/logo.png">"""
    
    meta_tags += f"""
    
    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{title}">
    <meta name="twitter:description" content="{description}">"""
    
    if image:
        meta_tags += f"""
    <meta name="twitter:image" content="{base_url}/{image}">"""
    else:
        meta_tags += f"""
    <meta name="twitter:image" content="{base_url}/assets/img/logo.png">"""
    
    meta_tags += f"""
    
    <!-- Canonical URL -->
    <link rel="canonical" href="{base_url}/{filename}">"""
    
    # Add location-specific meta tags for Michigan pages
    if "immigration" in filename.lower() or "employment" in filename.lower() or "contact" in filename.lower():
        meta_tags += """
    
    <!-- Additional SEO Meta Tags -->
    <meta name="geo.region" content="US-MI">
    <meta name="geo.placename" content="Kalamazoo, Michigan">
    <meta name="geo.position" content="42.2917;-85.5872">
    <meta name="ICBM" content="42.2917, -85.5872">"""
    
    # Add Dublin Core meta tags
    meta_tags += f"""
    <meta name="DC.title" content="{title}">
    <meta name="DC.description" content="{description}">
    <meta name="DC.subject" content="{keywords.split(', ')[:3].join(', ')}">"""
    
    return meta_tags

def update_html_file(filepath):
    """Update an HTML file with SEO meta tags."""
    
    try:
        with open(filepath, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Check if SEO meta tags already exist
        if '<!-- SEO Meta Tags -->' in content:
            print(f"✓ {filepath.name} already has SEO meta tags")
            return
        
        # Extract current title
        title_match = re.search(r'<title>(.*?)</title>', content)
        if not title_match:
            print(f"⚠ {filepath.name} - No title found, skipping")
            return
        
        current_title = title_match.group(1)
        
        # Determine page type and generate appropriate meta tags
        filename = filepath.name
        page_type = "general"
        
        if filename == "index.html":
            title = "Marc Asch Law Office | Immigration & Employment Law Attorney | Expert Legal Services"
            description = "Marc Asch Law Office provides expert immigration law and employment law services. Specializing in family immigration, green cards, naturalization, deportation defense, and workplace rights. Get professional legal representation today."
            keywords = "Marc Asch, immigration lawyer, employment lawyer, immigration attorney, family immigration, green cards, naturalization, deportation defense, employment law, workplace rights, legal services, attorney, lawyer, immigration law firm"
            image = "assets/img/logo.png"
            
        elif filename == "about_marc-asch.html":
            title = "About Marc Asch | Immigration & Employment Law Attorney | Professional Legal Services"
            description = "Learn about Marc Asch, experienced immigration and employment law attorney. Cornell University graduate, Villanova Law School alum, specializing in family immigration, deportation defense, and workplace rights. Professional legal representation since 2013."
            keywords = "Marc Asch, immigration attorney, employment lawyer, immigration lawyer, family immigration, deportation defense, workplace rights, Cornell University, Villanova Law School, legal services, attorney biography, immigration law firm"
            image = "assets/img/marc-working.jpg"
            
        elif filename == "contact_marc-asch.html":
            title = "Contact Marc Asch | Immigration & Employment Law Attorney | Kalamazoo, MI | Free Consultation"
            description = "Contact Marc Asch Law Office for immigration and employment law consultations. Located in Kalamazoo, MI. Call (617) 653-8184 or email for expert legal advice. Free initial consultation available."
            keywords = "contact Marc Asch, immigration lawyer contact, employment attorney contact, legal consultation, Kalamazoo immigration lawyer, Michigan immigration attorney, free legal consultation, immigration law office, employment law office"
            image = "assets/img/logo.png"
            
        elif filename == "employment.html":
            title = "Employment Law Services | Kalamazoo Employment Lawyer Marc Asch | Workplace Rights & Discrimination"
            description = "Expert employment law services in Kalamazoo, MI. Marc Asch represents employees in discrimination cases, wage disputes, leave rights violations, and workplace legal matters. Protect your workplace rights today."
            keywords = "employment lawyer Kalamazoo, employment attorney Michigan, workplace discrimination, wage disputes, employment law, workplace rights, employment discrimination, Michigan employment lawyer, Kalamazoo employment attorney, workplace harassment, wrongful termination"
            image = "assets/img/employment-law.png"
            
        elif filename == "immigration.html":
            title = "Immigration Law Services | Kalamazoo Immigration Lawyer Marc Asch | Family Immigration & Green Cards"
            description = "Expert immigration law services in Kalamazoo, MI. Marc Asch specializes in family immigration, green cards, naturalization, deportation defense, and all immigration matters. Get professional legal help today."
            keywords = "immigration lawyer Kalamazoo, immigration attorney Michigan, family immigration, green cards, naturalization, deportation defense, immigration law, K-1 visa, adjustment of status, immigration detention, provisional waivers"
            image = "assets/img/logo.png"
            
        elif filename == "sitemap.html":
            title = "Site Map - Marc Asch Law Office | Complete Website Navigation Guide"
            description = "Complete sitemap and navigation guide for Marc Asch Law Office. Find all immigration law services, employment law, and legal resources in one place."
            keywords = "sitemap, Marc Asch Law Office, immigration law, employment law, legal services, attorney, lawyer, website navigation, legal resources"
            image = "assets/img/logo.png"
            
        elif filename == "privacy-policy.html":
            title = "Privacy Policy | Marc Asch Law Office | Data Protection & Privacy Information"
            description = "Privacy Policy for Marc Asch Law Office. Learn how we collect, use, and protect your personal information. Our commitment to data protection and privacy compliance."
            keywords = "privacy policy, Marc Asch Law Office, data protection, privacy information, legal privacy, website privacy, data collection, personal information protection"
            image = "assets/img/logo.png"
            
        elif filename == "disclaimer.html":
            title = "Legal Disclaimer | Marc Asch Law Office | Terms of Use & Legal Information"
            description = "Legal disclaimer and terms of use for Marc Asch Law Office. Important information about website content, legal advice, and attorney-client relationships. Read our complete disclaimer."
            keywords = "legal disclaimer, Marc Asch Law Office, terms of use, legal information, attorney disclaimer, website disclaimer, legal notice, attorney-client relationship"
            image = "assets/img/logo.png"
            
        elif "immigration-law_family-immigration" in filename:
            title = "Family-Based Immigration Lawyer | Kalamazoo, Michigan | Marc Asch | Family Reunification"
            description = "Expert family-based immigration lawyer in Kalamazoo, Michigan. Marc Asch helps families reunite through U.S. immigration law. Specializing in family visas, green cards, and family reunification services."
            keywords = "family immigration lawyer, family-based immigration, Kalamazoo immigration attorney, Michigan family immigration, family visa, family reunification, immigration lawyer Kalamazoo, family immigration attorney, green card family, immigration family law"
            image = "assets/img/immigrant_family.png"
            
        elif "immigration-law_green-cards" in filename:
            title = "Green Card Services | Kalamazoo Immigration Lawyer Marc Asch | Permanent Residency"
            description = "Expert green card services in Kalamazoo, Michigan. Marc Asch helps clients obtain lawful permanent residency through family-based, employment-based, and other green card pathways. Professional immigration representation."
            keywords = "green card services, permanent residency, immigration lawyer Kalamazoo, green card attorney Michigan, permanent resident card, immigration green card, Kalamazoo immigration lawyer, green card application, permanent residency lawyer"
            image = "assets/img/greencard.png"
            
        elif "immigration-law_naturalization" in filename:
            title = "Naturalization Services | Kalamazoo Immigration Lawyer Marc Asch | U.S. Citizenship"
            description = "Expert naturalization services in Kalamazoo, Michigan. Marc Asch helps clients become U.S. citizens through the naturalization process. Professional guidance for citizenship applications and requirements."
            keywords = "naturalization services, U.S. citizenship, immigration lawyer Kalamazoo, naturalization attorney Michigan, citizenship application, immigration lawyer, naturalization process, U.S. citizenship lawyer"
            image = "assets/img/logo.png"
            
        elif "immigration-law_removal-deportation" in filename:
            title = "Removal & Deportation Defense | Kalamazoo Immigration Lawyer Marc Asch | Immigration Court"
            description = "Expert removal and deportation defense in Kalamazoo, Michigan. Marc Asch represents clients in immigration court proceedings and deportation defense cases. Protect your right to stay in the U.S."
            keywords = "removal defense, deportation defense, immigration lawyer Kalamazoo, deportation attorney Michigan, immigration court, deportation lawyer, removal proceedings, immigration defense attorney"
            image = "assets/img/logo.png"
            
        elif "immigration-asylum" in filename:
            title = "Asylum Services | Kalamazoo Immigration Lawyer Marc Asch | Refugee Protection"
            description = "Expert asylum services in Kalamazoo, Michigan. Marc Asch helps clients apply for asylum and refugee protection in the United States. Professional representation for asylum seekers."
            keywords = "asylum services, refugee protection, immigration lawyer Kalamazoo, asylum attorney Michigan, asylum application, refugee lawyer, asylum seeker, immigration asylum attorney"
            image = "assets/img/logo.png"
            
        else:
            # Generic immigration law page
            title = current_title
            description = f"Professional immigration law services by Marc Asch Law Office in Kalamazoo, Michigan. Expert legal representation for all immigration matters."
            keywords = "immigration law, immigration lawyer, immigration attorney, Kalamazoo immigration, Michigan immigration, legal services, immigration legal help"
            image = "assets/img/logo.png"
        
        # Generate new meta tags
        new_meta_tags = generate_seo_meta_tags(filename, page_type, title, description, keywords, image)
        
        # Replace the title and add meta tags
        new_content = re.sub(
            r'<title>.*?</title>',
            new_meta_tags,
            content,
            flags=re.DOTALL
        )
        
        # Write updated content back to file
        with open(filepath, 'w', encoding='utf-8') as file:
            file.write(new_content)
        
        print(f"✓ Updated {filepath.name} with SEO meta tags")
        
    except Exception as e:
        print(f"✗ Error updating {filepath.name}: {str(e)}")

def main():
    """Main function to process all HTML files."""
    print("🚀 Starting SEO Meta Tags Update for Marc Asch Law Office Website")
    print("=" * 70)
    
    # Get current directory
    current_dir = Path.cwd()
    
    # Find all HTML files
    html_files = list(current_dir.glob("*.html"))
    
    if not html_files:
        print("No HTML files found in current directory")
        return
    
    print(f"Found {len(html_files)} HTML files to process:")
    print()
    
    # Process each HTML file
    for html_file in html_files:
        update_html_file(html_file)
    
    print()
    print("=" * 70)
    print("✅ SEO Meta Tags Update Complete!")
    print(f"Processed {len(html_files)} HTML files")
    print()
    print("📋 What was added to each page:")
    print("• Optimized page titles with keywords")
    print("• Meta descriptions for search results")
    print("• Relevant keywords for search engines")
    print("• Open Graph tags for social media sharing")
    print("• Twitter Card tags for Twitter sharing")
    print("• Canonical URLs to prevent duplicate content")
    print("• Geographic meta tags for local SEO")
    print("• Dublin Core metadata for academic indexing")

if __name__ == "__main__":
    main()
