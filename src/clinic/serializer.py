def serialize_patient_profile(profile):
    return {
        "patient_id": profile["patient_id"],
        "display_name": profile["full_name"],
        "risk": profile["risk_level"],
    }
