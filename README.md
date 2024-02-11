# Xing-English-jobs-filter
JavaScript script that runs on the Xing website. It leverages simple text analysis to identify and hide German job postings based on specific trigrams frequent in the German language. Additionally, it detects "saved" jobs (indicating applied jobs) and hides them from the view.

# Installation
1. Install a Userscript Manager: First, ensure you have a userscript manager installed in your browser, such as Tampermonkey or Greasemonkey.
2. Add the Script: Open the userscript manager dashboard and create a new script.
3. Copy and Paste: Copy the code provided in this repository and paste it into the new script section in your userscript manager.
4. Save and Activate: Save the script. It should now be active whenever you navigate to the Xing website.

# Usage
Automatic Filtering: The script runs automatically, filtering out non-German job postings and jobs marked as "saved".
Manual Refresh: If new jobs load (e.g., via infinite scroll or page navigation), the script should automatically apply the filters again within a short period.
