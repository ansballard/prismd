import React, { useCallback } from "react";
import markdown from "snarkdown";
import { PrismdBuilder } from "./prismd.builder.mjs";

export const Prismd = PrismdBuilder({ h: React.createElement, useCallback, markdown });
