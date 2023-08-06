import { defineStore } from "pinia";
import { User } from "~/schemas";

interface State {
  user: User | null;
}

export const useUserStore = defineStore("user", {
  state: (): State => ({ user: null }),
  getters: {
    fullname(state: State) {
      return `${state.user?.name} ${state.user?.surname}`;
    },
    initials(state: State) {
      return `${state.user?.name?.[0]}${state.user?.surname?.[0]}`.toUpperCase();
    },
  },
  actions: {
    add(user: User) {
      this.user = user;
    },
    update(user: Partial<User>) {
      if (this.user) {
        this.user = { ...this.user, ...user };
      }
    },
    remove() {
      this.user = null;
    },
  },
});
