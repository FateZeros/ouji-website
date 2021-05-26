const UserSettingKey = 'OUJI_WEBSITE_USER_SETTING'

export function setUserSetting(userSetting) {
  localStorage.setItem(UserSettingKey, userSetting)
}

export function getUserSetting() {
  return localStorage.getItem(UserSettingKey) || undefined
}

export function removeUserSetting() {
  localStorage.removeItem(UserSettingKey)
}
