'use client'

import { Card, CardHeader, CardContent } from '../../../components/Card'
import Header from '../Header'
import { Separator } from '../../../components/Separator'
import { Button } from '../../../components/Button'
import { CalendarDays, PlaneTakeoff, Plus } from 'lucide-react'
import { useAuth } from '../../../hooks/auth'

const Dashboard = () => {
    const { user } = useAuth()
    return (
        <>
            <Header title="Dashboard" />

            <div className="py-8 px-4 md:px-8">
                <div className="max-w-6xl mx-auto space-y-6">
                    <Card className="shadow-md">
                        <CardHeader className="text-xl font-semibold">
                            Hallo, {user?.name || 'Traveler'}!!
                        </CardHeader>
                        <CardContent className="text-gray-700">
                            Ready for your next adventure? Check your trips
                            below or make a new booking.
                        </CardContent>
                    </Card>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Upcoming Trip */}
                        <Card className="shadow-md">
                            <CardHeader className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <PlaneTakeoff className="w-5 h-5 text-primary" />
                                    <span className="font-medium">
                                        Upcoming Trip
                                    </span>
                                </div>
                                <Button size="sm" variant="outline">
                                    View All
                                </Button>
                            </CardHeader>
                            <CardContent className="text-gray-700 space-y-2">
                                <p className="font-semibold">✈️ Bali Getaway</p>
                                <p className="text-sm text-muted-foreground">
                                    May 18 - May 22, 2025
                                </p>
                                <p className="text-sm">
                                    Status:{' '}
                                    <span className="text-green-600 font-medium">
                                        Confirmed
                                    </span>
                                </p>
                            </CardContent>
                        </Card>

                        {/* Quick Actions */}
                        <Card className="shadow-md">
                            <CardHeader className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <CalendarDays className="w-5 h-5 text-primary" />
                                    <span className="font-medium">
                                        Quick Actions
                                    </span>
                                </div>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-3">
                                <Button className="w-full justify-start gap-2">
                                    <Plus className="w-4 h-4" />
                                    Book a New Trip
                                </Button>
                                <Button
                                    variant="outline"
                                    className="w-full justify-start gap-2">
                                    📄 My Bookings
                                </Button>
                                <Button
                                    variant="outline"
                                    className="w-full justify-start gap-2">
                                    🛠️ Get Support
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
