import re
import unittest
from html.parser import HTMLParser
from pathlib import Path


SITE = Path(__file__).resolve().parents[1] / "index.html"


class SiteDocument(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.elements = []
        self.text = []

    def handle_starttag(self, tag, attrs):
        self.elements.append((tag, dict(attrs)))

    def handle_data(self, data):
        self.text.append(data)


class PortfolioTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.source = SITE.read_text(encoding="utf-8")
        cls.document = SiteDocument()
        cls.document.feed(cls.source)
        cls.text = " ".join(cls.document.text)

    def test_page_has_search_metadata_and_semantic_landmarks(self):
        self.assertIn("<title>", self.source)
        self.assertIn('name="description"', self.source)
        tags = [tag for tag, _ in self.document.elements]
        for landmark in ("header", "nav", "main", "footer"):
            self.assertIn(landmark, tags)

    def test_internal_navigation_points_to_real_sections(self):
        ids = {attrs.get("id") for _, attrs in self.document.elements if attrs.get("id")}
        links = [attrs.get("href", "") for tag, attrs in self.document.elements if tag == "a"]
        self.assertIn("#main-content", links)
        self.assertTrue({"about", "work", "writing", "journey", "contact"}.issubset(ids))
        for href in links:
            if href.startswith("#"):
                self.assertIn(href[1:], ids, f"Broken in-page link: {href}")

    def test_portfolio_keeps_portuguese_and_english(self):
        html_attrs = next(attrs for tag, attrs in self.document.elements if tag == "html")
        self.assertEqual(html_attrs.get("lang"), "pt-BR")
        self.assertIn("data-language-toggle", self.source)
        self.assertIn("engenheiro de software", self.text.lower())
        self.assertIn("software engineer", self.text.lower())

    def test_featured_projects_link_to_real_repositories(self):
        links = {attrs.get("href", "") for tag, attrs in self.document.elements if tag == "a"}
        for repo in ("mcp-wordpress", "b0r4-watch", "validai-proex-2025"):
            self.assertIn(f"https://github.com/leonardobora/{repo}", links)

    def test_full_career_and_certification_highlights_are_retained(self):
        for item in ("NEXTCARD", "Python 3", "Shopify"):
            self.assertIn(item, self.text)

    def test_timeline_dates_are_localized_in_both_languages(self):
        dates = re.findall(r'<div class="timeline-date">(.*?)</div>', self.source, re.DOTALL)
        self.assertEqual(len(dates), 5)
        for date in dates:
            self.assertIn('lang="pt-BR"', date)
            self.assertIn('lang="en"', date)

    def test_all_supplied_skill_and_certification_details_are_retained(self):
        for item in (
            "Version Control",
            "Application Security Training (Web, API)",
            "Python 3: Avançando na orientação a objetos",
            "Shopify: Loja online no ar",
        ):
            self.assertIn(item, self.text)

    def test_writing_section_links_to_official_publications(self):
        links = {attrs.get("href", "") for tag, attrs in self.document.elements if tag == "a"}
        self.assertIn('id="writing"', self.source)
        self.assertIn("Artigos, pesquisa e ideias em andamento.", self.text)
        self.assertIn("Agentes de IA a Serviço do Microempreendedor", self.text)
        self.assertIn("ValidaÍ", self.text)
        self.assertIn("https://portaldeperiodicos.unibrasil.com.br/index.php/anaisevinci/article/view/7531", links)
        self.assertIn("https://portaldeperiodicos.unibrasil.com.br/index.php/anaisevinci/article/view/8062", links)

    def test_icon_links_have_localized_accessible_names(self):
        arrow_links = [attrs for tag, attrs in self.document.elements
                       if tag == "a" and "project-arrow" in attrs.get("class", "").split()]
        self.assertEqual(len(arrow_links), 3)
        for attrs in arrow_links:
            self.assertIn("data-aria-pt", attrs)
            self.assertIn("data-aria-en", attrs)
        self.assertIn("data-aria-pt", self.source)
        self.assertIn("data-aria-en", self.source)

    def test_contact_links_are_present(self):
        links = {attrs.get("href", "") for tag, attrs in self.document.elements if tag == "a"}
        self.assertIn("mailto:leonardo.bora@outlook.com", links)
        self.assertIn("https://www.linkedin.com/in/leonardobora", links)

    def test_external_links_open_safely(self):
        for tag, attrs in self.document.elements:
            if tag == "a" and attrs.get("target") == "_blank":
                self.assertIn("noopener", attrs.get("rel", "").split())

    def test_responsive_and_reduced_motion_rules_exist(self):
        self.assertIn("@media", self.source)
        self.assertIn("prefers-reduced-motion", self.source)
        self.assertNotIn("api.github.com/users/", self.source)
        self.assertNotIn("Lorem ipsum", self.source)


if __name__ == "__main__":
    unittest.main()
