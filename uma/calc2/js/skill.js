class Skill {
    constructor(
        name,
        isPassive,
        isGold,
        skillType,
        triggerLength,
        triggerRunningStyle
    ) {
        this.name = name;
        this.isPassive = isPassive;
        this.isGold = isGold;
        this.skillType = skillType;

        this.triggerLength = triggerLength;
        this.triggerRunningStyle = triggerRunningStyle;
    }

    get ClassName() {
        return "goldskill fuga";
    }
}
