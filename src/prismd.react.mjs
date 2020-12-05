import React, { useCallback } from "react";
import { PrismdBuilder } from "./prismd.builder.mjs";

export const Prismd = PrismdBuilder({ h: React.createElement, useCallback });
