#!/usr/bin/env python3
"""
Backend API Testing for EnergyWise Home Website
Tests all backend endpoints with various scenarios
"""

import requests
import json
import sys
from datetime import datetime

# Get backend URL from frontend .env
BACKEND_URL = "https://energy-wise-home.preview.emergentagent.com/api"

class BackendTester:
    def __init__(self):
        self.base_url = BACKEND_URL
        self.test_results = []
        self.failed_tests = []
        
    def log_test(self, test_name, success, details=""):
        """Log test result"""
        result = {
            "test": test_name,
            "success": success,
            "details": details,
            "timestamp": datetime.now().isoformat()
        }
        self.test_results.append(result)
        if not success:
            self.failed_tests.append(result)
        
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status}: {test_name}")
        if details:
            print(f"   Details: {details}")
    
    def test_root_endpoint(self):
        """Test GET /api/ - Root health check"""
        try:
            response = requests.get(f"{self.base_url}/")
            if response.status_code == 200:
                data = response.json()
                if "message" in data:
                    self.log_test("Root endpoint health check", True, f"Response: {data}")
                else:
                    self.log_test("Root endpoint health check", False, f"Unexpected response format: {data}")
            else:
                self.log_test("Root endpoint health check", False, f"Status: {response.status_code}, Response: {response.text}")
        except Exception as e:
            self.log_test("Root endpoint health check", False, f"Exception: {str(e)}")
    
    def test_contact_form_valid(self):
        """Test POST /api/contact with valid data"""
        valid_data = {
            "name": "John Smith",
            "email": "john.smith@example.com",
            "subject": "Energy Efficiency Inquiry",
            "message": "I'm interested in learning more about home energy efficiency solutions and would like to schedule a consultation."
        }
        
        try:
            response = requests.post(f"{self.base_url}/contact", json=valid_data)
            if response.status_code == 200:
                data = response.json()
                required_fields = ["id", "name", "email", "subject", "message", "created_at", "read"]
                if all(field in data for field in required_fields):
                    self.log_test("Contact form valid submission", True, f"Contact created with ID: {data.get('id')}")
                else:
                    self.log_test("Contact form valid submission", False, f"Missing required fields in response: {data}")
            else:
                self.log_test("Contact form valid submission", False, f"Status: {response.status_code}, Response: {response.text}")
        except Exception as e:
            self.log_test("Contact form valid submission", False, f"Exception: {str(e)}")
    
    def test_contact_form_invalid_email(self):
        """Test POST /api/contact with invalid email"""
        invalid_data = {
            "name": "Jane Doe",
            "email": "invalid-email",
            "subject": "Test Subject",
            "message": "This is a test message with more than 10 characters."
        }
        
        try:
            response = requests.post(f"{self.base_url}/contact", json=invalid_data)
            if response.status_code == 422:  # Validation error expected
                self.log_test("Contact form invalid email validation", True, "Correctly rejected invalid email")
            else:
                self.log_test("Contact form invalid email validation", False, f"Expected 422, got {response.status_code}: {response.text}")
        except Exception as e:
            self.log_test("Contact form invalid email validation", False, f"Exception: {str(e)}")
    
    def test_contact_form_missing_fields(self):
        """Test POST /api/contact with missing required fields"""
        incomplete_data = {
            "name": "Test User",
            "email": "test@example.com"
            # Missing subject and message
        }
        
        try:
            response = requests.post(f"{self.base_url}/contact", json=incomplete_data)
            if response.status_code == 422:  # Validation error expected
                self.log_test("Contact form missing fields validation", True, "Correctly rejected incomplete data")
            else:
                self.log_test("Contact form missing fields validation", False, f"Expected 422, got {response.status_code}: {response.text}")
        except Exception as e:
            self.log_test("Contact form missing fields validation", False, f"Exception: {str(e)}")
    
    def test_contact_form_short_message(self):
        """Test POST /api/contact with message too short"""
        short_message_data = {
            "name": "Test User",
            "email": "test@example.com",
            "subject": "Test Subject",
            "message": "Short"  # Less than 10 characters
        }
        
        try:
            response = requests.post(f"{self.base_url}/contact", json=short_message_data)
            if response.status_code == 422:  # Validation error expected
                self.log_test("Contact form short message validation", True, "Correctly rejected short message")
            else:
                self.log_test("Contact form short message validation", False, f"Expected 422, got {response.status_code}: {response.text}")
        except Exception as e:
            self.log_test("Contact form short message validation", False, f"Exception: {str(e)}")
    
    def test_get_contact_messages(self):
        """Test GET /api/contact - Get all contact messages"""
        try:
            response = requests.get(f"{self.base_url}/contact")
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    self.log_test("Get contact messages", True, f"Retrieved {len(data)} contact messages")
                else:
                    self.log_test("Get contact messages", False, f"Expected list, got: {type(data)}")
            else:
                self.log_test("Get contact messages", False, f"Status: {response.status_code}, Response: {response.text}")
        except Exception as e:
            self.log_test("Get contact messages", False, f"Exception: {str(e)}")
    
    def test_newsletter_subscribe_valid(self):
        """Test POST /api/newsletter/subscribe with valid email"""
        valid_email = {
            "email": "newsletter.subscriber@example.com"
        }
        
        try:
            response = requests.post(f"{self.base_url}/newsletter/subscribe", json=valid_email)
            if response.status_code == 200:
                data = response.json()
                required_fields = ["id", "email", "subscribed_at", "active"]
                if all(field in data for field in required_fields):
                    self.log_test("Newsletter subscription valid", True, f"Subscription created with ID: {data.get('id')}")
                else:
                    self.log_test("Newsletter subscription valid", False, f"Missing required fields in response: {data}")
            else:
                self.log_test("Newsletter subscription valid", False, f"Status: {response.status_code}, Response: {response.text}")
        except Exception as e:
            self.log_test("Newsletter subscription valid", False, f"Exception: {str(e)}")
    
    def test_newsletter_subscribe_duplicate(self):
        """Test POST /api/newsletter/subscribe with duplicate email"""
        duplicate_email = {
            "email": "newsletter.subscriber@example.com"  # Same as previous test
        }
        
        try:
            response = requests.post(f"{self.base_url}/newsletter/subscribe", json=duplicate_email)
            if response.status_code == 400:  # Duplicate error expected
                data = response.json()
                if "already subscribed" in data.get("detail", "").lower():
                    self.log_test("Newsletter duplicate subscription handling", True, "Correctly rejected duplicate subscription")
                else:
                    self.log_test("Newsletter duplicate subscription handling", False, f"Unexpected error message: {data}")
            else:
                self.log_test("Newsletter duplicate subscription handling", False, f"Expected 400, got {response.status_code}: {response.text}")
        except Exception as e:
            self.log_test("Newsletter duplicate subscription handling", False, f"Exception: {str(e)}")
    
    def test_newsletter_subscribe_invalid_email(self):
        """Test POST /api/newsletter/subscribe with invalid email"""
        invalid_email = {
            "email": "not-an-email"
        }
        
        try:
            response = requests.post(f"{self.base_url}/newsletter/subscribe", json=invalid_email)
            if response.status_code == 422:  # Validation error expected
                self.log_test("Newsletter invalid email validation", True, "Correctly rejected invalid email")
            else:
                self.log_test("Newsletter invalid email validation", False, f"Expected 422, got {response.status_code}: {response.text}")
        except Exception as e:
            self.log_test("Newsletter invalid email validation", False, f"Exception: {str(e)}")
    
    def test_newsletter_unsubscribe_valid(self):
        """Test POST /api/newsletter/unsubscribe with valid email"""
        valid_email = {
            "email": "newsletter.subscriber@example.com"  # Email that was subscribed earlier
        }
        
        try:
            response = requests.post(f"{self.base_url}/newsletter/unsubscribe", json=valid_email)
            if response.status_code == 200:
                data = response.json()
                if "unsubscribed" in data.get("message", "").lower():
                    self.log_test("Newsletter unsubscribe valid", True, "Successfully unsubscribed")
                else:
                    self.log_test("Newsletter unsubscribe valid", False, f"Unexpected response: {data}")
            else:
                self.log_test("Newsletter unsubscribe valid", False, f"Status: {response.status_code}, Response: {response.text}")
        except Exception as e:
            self.log_test("Newsletter unsubscribe valid", False, f"Exception: {str(e)}")
    
    def test_newsletter_unsubscribe_nonexistent(self):
        """Test POST /api/newsletter/unsubscribe with non-existent email"""
        nonexistent_email = {
            "email": "nonexistent.user@example.com"
        }
        
        try:
            response = requests.post(f"{self.base_url}/newsletter/unsubscribe", json=nonexistent_email)
            if response.status_code == 404:  # Not found error expected
                self.log_test("Newsletter unsubscribe non-existent email", True, "Correctly handled non-existent email")
            else:
                self.log_test("Newsletter unsubscribe non-existent email", False, f"Expected 404, got {response.status_code}: {response.text}")
        except Exception as e:
            self.log_test("Newsletter unsubscribe non-existent email", False, f"Exception: {str(e)}")
    
    def test_status_endpoint_post(self):
        """Test POST /api/status - Create status check"""
        status_data = {
            "client_name": "EnergyWise Test Client"
        }
        
        try:
            response = requests.post(f"{self.base_url}/status", json=status_data)
            if response.status_code == 200:
                data = response.json()
                required_fields = ["id", "client_name", "timestamp"]
                if all(field in data for field in required_fields):
                    self.log_test("Status endpoint POST", True, f"Status check created with ID: {data.get('id')}")
                else:
                    self.log_test("Status endpoint POST", False, f"Missing required fields in response: {data}")
            else:
                self.log_test("Status endpoint POST", False, f"Status: {response.status_code}, Response: {response.text}")
        except Exception as e:
            self.log_test("Status endpoint POST", False, f"Exception: {str(e)}")
    
    def test_status_endpoint_get(self):
        """Test GET /api/status - Get status checks"""
        try:
            response = requests.get(f"{self.base_url}/status")
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    self.log_test("Status endpoint GET", True, f"Retrieved {len(data)} status checks")
                else:
                    self.log_test("Status endpoint GET", False, f"Expected list, got: {type(data)}")
            else:
                self.log_test("Status endpoint GET", False, f"Status: {response.status_code}, Response: {response.text}")
        except Exception as e:
            self.log_test("Status endpoint GET", False, f"Exception: {str(e)}")
    
    def run_all_tests(self):
        """Run all backend tests"""
        print(f"🚀 Starting Backend API Tests for: {self.base_url}")
        print("=" * 60)
        
        # Test all endpoints
        self.test_root_endpoint()
        self.test_contact_form_valid()
        self.test_contact_form_invalid_email()
        self.test_contact_form_missing_fields()
        self.test_contact_form_short_message()
        self.test_get_contact_messages()
        self.test_newsletter_subscribe_valid()
        self.test_newsletter_subscribe_duplicate()
        self.test_newsletter_subscribe_invalid_email()
        self.test_newsletter_unsubscribe_valid()
        self.test_newsletter_unsubscribe_nonexistent()
        self.test_status_endpoint_post()
        self.test_status_endpoint_get()
        
        # Print summary
        print("\n" + "=" * 60)
        print("📊 TEST SUMMARY")
        print("=" * 60)
        
        total_tests = len(self.test_results)
        passed_tests = total_tests - len(self.failed_tests)
        
        print(f"Total Tests: {total_tests}")
        print(f"Passed: {passed_tests}")
        print(f"Failed: {len(self.failed_tests)}")
        print(f"Success Rate: {(passed_tests/total_tests)*100:.1f}%")
        
        if self.failed_tests:
            print("\n❌ FAILED TESTS:")
            for test in self.failed_tests:
                print(f"  - {test['test']}: {test['details']}")
        
        return len(self.failed_tests) == 0

if __name__ == "__main__":
    tester = BackendTester()
    success = tester.run_all_tests()
    sys.exit(0 if success else 1)