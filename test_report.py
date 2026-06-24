import unittest

from src.report import build_visit_summary


class VisitSummaryTest(unittest.TestCase):
    def test_visit_summary_uses_profile_contract(self):
        summary = build_visit_summary("p-1001")

        self.assertEqual(summary["title"], "Follow-up summary for Alice Chen")
        self.assertEqual(summary["patient_id"], "p-1001")
        self.assertEqual(summary["risk"], "medium")
        self.assertIn("dense_breast", summary["body"])
        self.assertIn("Alice Chen", summary["body"])


if __name__ == "__main__":
    unittest.main()
