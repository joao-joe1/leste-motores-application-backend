import { Module } from "@nestjs/common";
import { AdminCheckGuard } from "./admin-check.guard";

@Module({
    providers: [AdminCheckGuard],
})
export class GuardModule { }