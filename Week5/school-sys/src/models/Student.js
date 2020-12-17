class Student {
    constructor(
        name,
        birthDate,
        guardianName,
        guardianPhone,
        emergencyContact,
        emergencyPhone,
        foodRestriction,
        foodRestrictionDescription,
        allowMedia,
        pickupAuthorizedPersonel,
        grade,
        additionalNote
    ) {
        this._name = name;
        this._birthDate = birthDate;
        this._guardianName = guardianName;
        this._guardianPhone = guardianPhone;
        this._emergencyContact = emergencyContact;
        this._emergencyPhone = emergencyPhone;
        this._foodRestriction = foodRestriction;
        this._foodRestrictionDescription = foodRestrictionDescription;
        this._allowMedia = allowMedia;
        this._pickupAuthorizedPersonel = pickupAuthorizedPersonel;
        this._grade = grade;
        this._additionalNote = additionalNote;
    }
}

export default Student;