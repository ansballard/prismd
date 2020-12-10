//@ts-check
import { h } from "preact";
import { useCallback } from "preact/hooks";
import markdown from "snarkdown";
import { PrismdBuilder } from "./prismd.builder.mjs";

export const Prismd = PrismdBuilder({ h, useCallback, markdown });
