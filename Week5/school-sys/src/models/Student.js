class Student {
    constructor(
        name = '',
        birthDate = '',
        grade = '',
        guardianName = '',
        guardianPhone = '',
        emergencyName = '',
        emergencyPhone = '',
        foodRestriction = false,
        foodRestrictionDescription = null,
        allowMedia = false,
        pickupAuthorizedPersonel = [],
        additionalNote = null
    ) {
        this.id = (Math.random() * 100000 - 10000).toFixed();
        this.name = name;
        this.birthDate = birthDate;
        this.grade = grade;
        this.guardianName = guardianName;
        this.guardianPhone = guardianPhone;
        this.emergencyName = emergencyName;
        this.emergencyPhone = emergencyPhone;
        this.foodRestriction = foodRestriction;
        this.foodRestrictionDescription = foodRestrictionDescription;
        this.allowMedia = allowMedia;
        // this.pickupAuthorizedPersonel = pickupAuthorizedPersonel;
        this.additionalNote = additionalNote;
    }

    // get name() {
    //     return this.name;
    // }

    // set name(name) {
    //     this.name = name;
    // }

    // get birthDate() {
    //     return this.birthDate;
    // }

    // set birthDate(birthDate) {
    //     this.birthDate = birthDate;
    // }

    // get guardianName() {
    //     return this.guardianName;
    // }

    // set guardianName(guardianName) {
    //     this.guardianName = guardianName;
    // }

    // get guardianPhone() {
    //     return this.guardianPhone;
    // }

    // set guardianPhone(guardianPhone) {
    //     this.guardianPhone = guardianPhone;
    // }

    // get emergencyName() {
    //     return this.emergencyName;
    // }

    // set emergencyName(emergencyName) {
    //     this.emergencyName = emergencyName;
    // }

    // get emergencyPhone() {
    //     return this.emergencyPhone;
    // }

    // set emergencyPhone(emergencyPhone) {
    //     this.emergencyPhone = emergencyPhone;
    // }

    // get foodRestriction() {
    //     return this.foodRestriction;
    // }

    // set foodRestriction(foodRestriction) {
    //     this.foodRestriction = foodRestriction;
    // }

    // get foodRestrictionDescription() {
    //     return this.foodRestrictionDescription;
    // }

    // set foodRestrictionDescription(foodRestrictionDescription) {
    //     this.foodRestrictionDescription = foodRestrictionDescription;
    // }

    // get allowMedia() {
    //     return this.allowMedia;
    // }

    // set allowMedia(allowMedia) {
    //     this.allowMedia = allowMedia;
    // }

    // get pickupAuthorizedPersonel() {
    //     return this.pickupAuthorizedPersonel;
    // }

    // set pickupAuthorizedPersonel(pickupAuthorizedPersonel) {
    //     this.pickupAuthorizedPersonel = pickupAuthorizedPersonel;
    // }

    // get grade() {
    //     return this.grade;
    // }

    // set grade(grade) {
    //     this.grade = grade;
    // }

    // get additionalNote() {
    //     return this.additionalNote;
    // }

    // set additionalNote(additionalNote) {
    //     this.additionalNote = additionalNote;
    // }

}

export default Student;