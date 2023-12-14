function isCriticalConditionPerson(body_temperature, oxygen, heart_rate) {
    const is_temperature_critical = body_temperature > 37 || body_temperature < 36.3;
    const is_oxygen_critical = oxygen < 0.5;
    const is_heart_rate_critical = heart_rate < 40 || heart_rate > 120;

    return is_temperature_critical || is_oxygen_critical || is_heart_rate_critical;
}
module.exports = isCriticalConditionPerson