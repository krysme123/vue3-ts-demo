import useUserStore from './modules/login';
const useStore = () => ({
   user: useUserStore,
  // app: useAppStore(),
  // permission: usePermissionStore(),
  // setting: useSettingStore(),
  // tagsView: useTagsViewStore()
});

export default useStore;
