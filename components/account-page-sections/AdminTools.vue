<template>
  <section class="border p-6 rounded-lg bg-white shadow-md mb-8">
    <div class="flex items-center mb-4">
      <i class="pi pi-cog text-primary text-3xl mr-3"></i>
      <h2 class="text-3xl font-bold text-gray-800">Admin Permissions</h2>
    </div>

    <div v-if="hasAnyPermission" class="mb-6">
      <p class="mb-4 text-gray-700">
        You have the following admin permissions:
      </p>
      <ul class="space-y-3">
        <li
          v-for="permission in allPermissions"
          :key="permission"
          class="flex items-center w-fit cursor-pointer"
          @click="($event)=>{
            if(isMissingPermission.includes(permission)){
              opSingle.toggle($event)
              currentSingle = permission
            }
          }"
        >
          <i
            :class="`pi pi-check-circle ${!isMissingPermission.includes(permission) ? 'text-green-500' : 'text-neutral-300'} mr-2`"
          ></i>
          <span class="text-gray-800 font-semibold capitalize">{{ permission.replace("_"," ").toLocaleLowerCase() }}</span>
        </li>
        <OverlayPanel :dt="{
        'popover.arrow.offset':{
          top:'20px !important'
        }
      }" class="!bg-accent bg !border-primary before:!border-transparent !max-w-[80vw] min-[498px]:!max-w-sm" ref="opSingle">
        <div class="p-4">
          <p class="text-gray-700 mb-2">
            To access <i class="not-italic font-bold">{{ currentSingle }}</i> features, please send a request for permission. Our team will review your request and respond promptly.
          </p>
          <Button label="Send Request" icon="pi pi-send" class="!bg-primary !text-accent !border-none" @click="sendRequest" />
        </div>
      </OverlayPanel>
      </ul>
    </div>

    <div v-else class="mb-6">
      <p class="mb-4 text-gray-700">
        You do not have any admin permissions assigned.
      </p>
      <p class="mb-4 text-gray-700">
        Please request permission to access admin tools.
      </p>
      <Button label="Request Permission" icon="pi pi-envelope" class="!bg-primary !text-accent !border-none" @click="op.toggle($event)" />
      <OverlayPanel :dt="{
        'popover.arrow.offset':{
          top:'20px !important'
        }
      }" class="!bg-accent bg !border-primary before:!border-transparent !max-w-[80vw] min-[498px]:!max-w-sm" ref="op">
        <div class="p-4">
          <p class="text-gray-700 mb-2">
            To access admin tools, please send a request for permission. Our team will review your request and respond promptly.
          </p>
          <Button label="Send Request" icon="pi pi-send" class="!bg-primary !text-accent !border-none" @click="sendRequest" />
        </div>
      </OverlayPanel>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import Button from 'primevue/button';
import OverlayPanel from 'primevue/overlaypanel';
import { allPermissions } from '~/assets/lib/constants';
import type { AdminPermission } from '~/types';


const toast = useToast()

const user = {
  role: 'admin',
  adminPermissions: [] as AdminPermission[]
};

const hasAnyPermission = computed(() => user.adminPermissions.length > 0);
const isMissingPermission = allPermissions.map((p, i) =>  !user.adminPermissions.find(up => up === p)&&p).filter(mp=>mp!==false)

function sendRequest() {
  // Implement the request functionality here.
  toast.add({
    detail:'Your request for admin permissions has been sent!',
    summary: 'Request successful',
    severity:"success",
    closable:true,
    life: 3000
  });
}

const op = ref();
const opSingle = ref();
const currentSingle = ref<AdminPermission>();

</script>


